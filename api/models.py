
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
    
    def mymessage(self):
        
        msge= Message.objects.filter(msg=self)
        return msge
   
   
    
    def __str__(self): 
        return f"{self.user} avatar" 


class BlogPost(models.Model):
      
    user = models.ForeignKey(User,related_name="bost", on_delete=models.CASCADE)
    tittle = models.CharField(max_length=150, blank=False)
    discription = models.CharField(max_length=350, blank=False)
    image =  models.ImageField(upload_to =upload_file_to,default="static/Media/Yashirlogo.png", blank=True, null=True)
    
    def numoflikes(self):
        mylike = Likes.objects.filter(post=self.user)
        return len(mylike)
   
    
    def __str__(self): 
        return f"{self.user} Post"
    
class Likes(models.Model):   
    user = models.ForeignKey(User,related_name="likeUser", on_delete=models.CASCADE)
    post = models.ForeignKey(User,related_name="likeBost", on_delete=models.CASCADE)
    like  = models.IntegerField(default=1)
 
    def __str__(self): 
        return self.like


class Message(models.Model):   
    user = models.ForeignKey(User,related_name="MsgUser", on_delete=models.CASCADE)
    profile = models.ForeignKey(Userprofile,related_name="Msgprofile", on_delete=models.CASCADE)
    msg  = models.CharField(max_length=500)
 
    def __str__(self): 
        return self.msg

class SendMessageToApp(models.Model):   
    
    title  = models.CharField(max_length=500)
    email  = models.EmailField(blank=False)
    massage  = models.CharField(max_length=1500)
 
    def __str__(self): 
        return self.title
    
    
