resource "aws_cloudfront_origin_access_identity" "OAI" {
  comment = "Access ID project ${var.project_name}'s s3 bucket"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.static-site.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.OAI.cloudfront_access_identity_path
    }
  }

  aliases = ["${var.a_record_name}.${var.domain_name}"]

  enabled             = true
  is_ipv6_enabled     = false
  comment             = "CDN for ${var.project_name}"
  default_root_object = "index.html"
  price_class         = "PriceClass_100"



  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE"]
    }
  }

  dynamic "custom_error_response" {
    for_each = toset([403, 404])

    content {
      response_code         = 200
      error_code            = custom_error_response.value
      response_page_path    = "/index.html"
      error_caching_min_ttl = 10
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
    acm_certificate_arn            = aws_acm_certificate.ssl.arn
    ssl_support_method             = "sni-only"
  }
  tags = local.tags

  depends_on = [
    aws_acm_certificate_validation.ssl,
    aws_acm_certificate.ssl
  ]
}