resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = var.public_cidr
  map_public_ip_on_launch = true

  tags = local.tags
}


resource "aws_subnet" "private" {
  count = length(var.private_cidr)
  vpc_id     = aws_vpc.main.id
  cidr_block = var.private_cidr[count.index]
  availability_zone = element(data.aws_availability_zones.available.names, count.index)

  tags = local.tags
}


resource "aws_db_subnet_group" "private" {
  name       = "rds_group"
  subnet_ids = aws_subnet.private.*.id

  tags = local.tags
}