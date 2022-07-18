resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
  tags = local.tags
}

resource "aws_internet_gateway" "main" {    
  vpc_id =  aws_vpc.main.id 
}

resource "aws_route" "internet_access" {
  route_table_id         = aws_vpc.main.main_route_table_id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.main.id
}