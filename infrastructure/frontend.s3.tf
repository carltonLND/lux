resource "aws_s3_bucket" "static-site" {
  bucket = var.bucket_name

  tags = local.tags
}


resource "aws_s3_bucket_acl" "public-read" {
  bucket = aws_s3_bucket.static-site.bucket
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "allow_access_from_cloudfront" {
  bucket = aws_s3_bucket.static-site.bucket
  policy = templatefile("frontend.bucket_policy.tftpl", {bucket_arn = aws_s3_bucket.static-site.arn, oai_id = aws_cloudfront_origin_access_identity.OAI.id})

}
