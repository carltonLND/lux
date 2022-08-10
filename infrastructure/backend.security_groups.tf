resource "aws_security_group" "api" {
  name        = "api_sg"
  description = "Allow api port inbound traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    description = "api from internet"
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "ssh from internet"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = merge(local.tags, {
    Name = "allow_net_to_api"
  })
}

resource "aws_security_group" "db" {
  name        = "db_sg"
  description = "Allow api inbound traffic"
  vpc_id      = aws_vpc.main.id

  ingress {
    description     = "mysql data port from api"
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.api.id]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = merge(local.tags, {
    Name = "allow_api_to_db"
  })
}