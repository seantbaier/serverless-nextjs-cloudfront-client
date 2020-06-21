# Deadbear Client

## AWS Policy Needed

### WIP: This one did not work need to revise

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "lambda:UpdateFunctionCode",
        "iam:GetRole",
        "iam:PassRole",
        "lambda:UpdateFunctionConfiguration",
        "lambda:GetFunctionConfiguration",
        "lambda:PublishVersion",
        "cloudfront:GetDistributionConfig",
        "cloudfront:CreateCloudFrontOriginAccessIdentity"
      ],
      "Resource": [
        "arn:aws:lambda:us-east-1:616285773385:function:9gqdatd-s25ite2",
        "arn:aws:iam::616285773385:role/9gqdatd-pqazlbs",
        "arn:aws:cloudfront::616285773385:distribution/E327BA1TTZ6URD",
        "arn:aws:cloudfront::616285773385:origin-access-identity/origin-access-identity/cloudfront/EIW2BUAQFQGJG"
      ]
    }
  ]
}
```
