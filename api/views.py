from urllib import request, response
from .serialiers import UserSerializer,User_profile_Serializer,UpdatepassSerializer,BlogPostSerializer,LikesSerializer,MessageSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import status
from . models import BlogPost, Userprofile,Likes,Message
from rest_framework.decorators import action



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    @action(methods=['PUT'], detail=True, serializer_class=UpdatepassSerializer)
    def ChangePass(self,request, pk):
        user = User.objects.get(pk=pk)
        serializer = UpdatepassSerializer(data=request.data)
        if serializer.is_valid():
            if not user.check_password(serializer.data.get("oldPassword")):
                return Response({"message":"Password Dosnt Match"},status=status.HTTP_400_BAD_REQUEST)
            
            user.set_password(serializer.data.get("newPassword"))
            user.save()
            return Response({"message":"Password is update it"},status=status.HTTP_200_OK)
            
            
            
        
        
    
    
class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        serializer = UserSerializer(user,many= False)
        return Response ({'token':token.key,'user':serializer.data})
    
    

class User_profile_ViewSet(viewsets.ModelViewSet):
    queryset = Userprofile.objects.all()
    serializer_class = User_profile_Serializer
        
    
class BlogPoarViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    
    
        
class LikesViewSet(viewsets.ModelViewSet):
    queryset = Likes.objects.all()
    serializer_class = LikesSerializer
    
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    
    
        
 