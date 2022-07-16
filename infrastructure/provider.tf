provider "aws" { 
}

provider "aws" {
  alias = "us-east"

  region = "us-east-1"
}