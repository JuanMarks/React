from django.contrib import admin
from django.urls import path, include
from log.api.viewsets import LogViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('log', LogViewSet, basename='Log') 

urlpatterns = [
    path('', include(router.urls)),
]