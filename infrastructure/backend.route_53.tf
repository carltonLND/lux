resource "aws_route53_record" "api-a" {
  zone_id = data.aws_route53_zone.main_domain.zone_id
  name    = "${var.a_record_name}-api.${var.domain_name}"
  type    = "A"
  records = [aws_instance.api.public_ip]
  ttl     = "300"
}

resource "aws_route53_record" "db-a" {
  zone_id = data.aws_route53_zone.main_domain.zone_id
  name    = "${var.a_record_name}-db.${var.domain_name}"
  type    = "CNAME"
  records = [(split(":",aws_db_instance.rds.endpoint))[0] ]
  ttl     = "300"
}