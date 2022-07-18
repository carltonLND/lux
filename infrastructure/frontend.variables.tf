
variable "region" {
  type    = string
  default = "eu-west-2"
}
variable "bucket_name" {
  type    = string
  default = "static-site"
}
variable "project_name" {
  type    = string
  default = "lux"
}
variable "a_record_name" {
  type    = string
  default = "lux"
}

variable "environment" {
  type    = string
  default = "dev"
}
variable "domain_name" {

}
