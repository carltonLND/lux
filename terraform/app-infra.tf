terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.46.0"
    }
  }
}

variable "subscription_id" {
  description = "subscription id"
  type        = string
}

variable "tenant_id" {
  description = "tenant id"
  type        = string
}

variable "location_simple" {
  description = "location simplified"
  type        = string
}

variable "app_name" {
  description = "apps name"
  type        = string
}


variable "registry_name" {
  type = string
}

variable "registry_url" {
  type = string
}


locals {
  common_tags = {
    project    = "lux"
    type       = "webapps"
    depertment = "groupwork"
  }
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
  tenant_id       = var.tenant_id
}


resource "azurerm_resource_group" "rg" {
  name     = "rg-webapps-${var.location_simple}"
  location = "UK South"

  tags = local.common_tags
}

resource "azurerm_container_registry" "acr" {
  name                = var.registry_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Basic"
  admin_enabled       = false

  tags = local.common_tags
}

resource "azurerm_user_assigned_identity" "user" {
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  name                = "acr-pull-${var.app_name}"

  tags = local.common_tags
}

resource "azurerm_role_assignment" "role_assignment" {
  scope                = azurerm_container_registry.acr.id
  role_definition_name = "AcrPull"
  principal_id         = azurerm_user_assigned_identity.user.principal_id
}

resource "azurerm_app_service_plan" "asp" {
  name                = "aps-${var.app_name}-${var.location_simple}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B2"
  }

  tags = local.common_tags
}

resource "azurerm_app_service" "apps" {
  name                = "apps-${var.app_name}-${var.location_simple}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.asp.id

  site_config {
    always_on        = "true"
    app_command_line = ""
    linux_fx_version = "COMPOSE|${filebase64("../docker-compose.deploy.yml")}"
  }

  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.user.id]
  }

  lifecycle {
    ignore_changes = [
      site_config.0.linux_fx_version
    ]
  }

  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DOCKER_REGISTRY_SERVER_URL"          = var.registry_url
  }

  tags = local.common_tags
}

