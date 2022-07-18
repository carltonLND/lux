resource "aws_route53_record" "api-a" {
  zone_id = data.aws_route53_zone.main_domain.zone_id
  name  = "${var.a_record_name}-api.${var.domain_name}"
  type  = "A"
  records = [aws_instance.api.public_ip]
  ttl = "300"
}