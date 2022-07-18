provider "aws" {
  region = var.region
}

provider "aws" {
  alias  = "us-east"
  region = "us-east-1"
}