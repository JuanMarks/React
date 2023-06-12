from django.contrib.auth.models  import User
from rest_framework import permissions
from rest_framework import viewsets
from .serializer import *

class UserViewSet(viewsets.ModelViewSet):
    '''Usuarios'''
    queryset = User.objects.all()
    serializer_class = UserSerializer