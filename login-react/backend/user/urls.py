from django.urls import path, include
from .api.viewsets import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'user', UserViewSet, basename='Usuarios')


urlpatterns = [
    path('', include(router.urls)),
]