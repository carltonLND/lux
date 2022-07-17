locals {
  s3_origin_id = "myS3Origin"

  tags = {
    Project = var.project_name
    Environment = var.environment
  }
}