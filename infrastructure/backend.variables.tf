variable "vpc_cidr" {
  type = string
  default = "10.0.0.0/16"
}

variable "public_cidr" {
  type = string
  default = "10.0.1.0/24"
}

variable "private_cidr" {
  type = list(string)
  default = ["10.0.2.0/24", "10.0.3.0/24"]
}

variable "api_ami" {
  type = string
  default = "ami-0d9a5565277a55d5d"
}

variable "my_ip" {
  type = string
  default = "90.213.190.82"
}

variable "key_name" {
  type = string
  default = "lux-api"
}

variable "db_username" {
  type = string
  default = "root"
}

variable "db_password" {
  type = string
  default = "Passw0rd1"
}
variable "db_database_name" {
  type = string
  default = "lux"
}