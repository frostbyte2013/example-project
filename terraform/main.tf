############## 
### COMPUTE ##
##############

# module "ec2_instance" {
#   source  = "terraform-aws-modules/ec2-instance/aws"

#   name = "django-sample"

#   instance_type          = "t2.micro"
#   key_name               = "user1"
#   monitoring             = true
#   vpc_security_group_ids = ["sg-12345678"]
#   subnet_id              = "subnet-eddcdzz4"
  
#   user_data = var.user_data

#   tags = {
#     Terraform   = "true"
#     Environment = "dev"
#   }
# }