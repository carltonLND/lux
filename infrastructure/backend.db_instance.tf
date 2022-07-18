resource "aws_db_instance" "rds" {
  identifier = "${var.project_name}db"
  allocated_storage    = 10
  engine               = "mysql"
  engine_version       = "5.7"
  instance_class       = "db.t3.micro"
  username             = var.db_username
  password             = var.db_password
  db_name              = var.db_database_name
  parameter_group_name = "default.mysql5.7"
  skip_final_snapshot  = true
  db_subnet_group_name = aws_db_subnet_group.private.name
  vpc_security_group_ids = [aws_security_group.db.id]

  tags = local.tags
}

output "db_endpoint" {
  value = aws_db_instance.rds.endpoint
}