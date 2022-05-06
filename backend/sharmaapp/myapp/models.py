from django.db import models

# Create your models here.
class Contact(models.Model):
    fullname = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    message = models.TextField()