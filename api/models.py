
from django.db import models
from django.contrib.auth.models import User

def upload_file_to(instance,filename):
    return f"{instance.user}/{filename}"
    

class Userprofile(models.Model):
  
    user = models.OneToOneField(User,related_name="profile",on_delete=models.CASCADE)
    image =  models.ImageField(upload_to =upload_file_to,default="static/Media/Yashirlogo.png", blank=True, null=True)
    address = models.CharField(max_length=150, blank=True)
    phone = models.IntegerField(default=False, blank=True)
    profisional = models.CharField(max_length=150, blank=True)
    bio = models.TextField(max_length=250, blank=True)
   
   
    
    def __str__(self): 
        return f"{self.user} avatar" 


class BlogPost(models.Model):
      
    user = models.ManyToManyField(User,related_name="bost")
    tittle = models.CharField(max_length=150, blank=False)
    discription = models.CharField(max_length=350, blank=False)
    image =  models.ImageField(upload_to =upload_file_to,default="static/Media/Yashirlogo.png", blank=True, null=True)
    
   
   
    
    def __str__(self): 
        return f"{self.user} Post"


