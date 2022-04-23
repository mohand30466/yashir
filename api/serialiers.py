# from importlib.metadata import requires
from turtle import bk
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Userprofile, BlogPost,Likes,Message


class UpdatepassSerializer(serializers.Serializer):
    oldPassword = serializers.CharField()
    newPassword = serializers.CharField()


class User_profile_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Userprofile
        fields = ['id',"image","address","phone","profisional","bio","mymessage" ]
    
   
class UserSerializer(serializers.ModelSerializer):
    profile = User_profile_Serializer()
    
    class Meta:
        model = User
        fields = ['id','username', 'email',"password","profile" ]
        extra_kwargs = password={"write_only": True,"required":True}   
          
    def create(self, validated_data):
        profile_data = validated_data.pop("profile")
        user = User.objects.create_user(**validated_data)
        Userprofile.objects.create(user=user,**profile_data)
        Token.objects.create(user=user)
        return user
       
class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id','tittle','discription','image',"numoflikes"]
        
        
class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ['id','user','post','like']
        
        
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id','user','profile','msg']
        
        
        
        
        
        

