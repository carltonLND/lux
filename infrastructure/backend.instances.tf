resource "aws_instance" "api" {
  ami                  = var.api_ami
  instance_type        = "t3.micro"
  subnet_id            = aws_subnet.public.id
  iam_instance_profile = aws_iam_instance_profile.ssm.name
  vpc_security_group_ids      = [aws_security_group.api.id]
  key_name             = aws_key_pair.api.key_name

  tags = merge(local.tags,
  {
    name = "${var.project_name}-${var.environment}-api-srv"
  })

  depends_on = [
    aws_db_instance.rds
  ]
}

resource "aws_key_pair" "api" {
  key_name   = "api-key"
  public_key = local.public_key
}

output "instance_ip" {
  value = aws_instance.api.public_ip
}