from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, CustomObtainAuthToken,User_profile_ViewSet,BlogPoarViewSer



router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'userprofile', User_profile_ViewSet)
router.register(r'bosts', BlogPoarViewSer)



urlpatterns = [
    path(r'', include(router.urls)),
    path('auth/', CustomObtainAuthToken.as_view()),

    
]
