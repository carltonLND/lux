terraform {
  backend "s3" {
    bucket = "lux-remote-state-development"
    key    = "terraform.dev.tfstate"
    region = "eu-west-2"
  }
}

provider "aws" {
  region = var.region
}

provider "aws" {
  alias  = "us-east"
  region = "us-east-1"
}