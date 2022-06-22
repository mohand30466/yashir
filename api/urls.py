from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, CustomObtainAuthToken,User_profile_ViewSet,BlogPoarViewSet,LikesViewSet,MessageViewSet,SendMessageToAppViewSet



router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'userprofile', User_profile_ViewSet)
router.register(r'posts', BlogPoarViewSet)
router.register(r'like', LikesViewSet)
router.register(r'msg', MessageViewSet)
router.register(r'message', SendMessageToAppViewSet)




urlpatterns = [
    path(r'/', include(router.urls)),
    path('auth/', CustomObtainAuthToken.as_view()),

    
]
