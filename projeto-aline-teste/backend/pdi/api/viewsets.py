from pdi.models import Pdi,PdiDeletion
from rest_framework import permissions
from rest_framework import viewsets
from .serializer import *

class PdiViewSet(viewsets.ModelViewSet):
    '''Exibindo os pdi'''
    queryset = Pdi.objects.all()
    serializer_class = PdiSerializer
    #permission_classes = [permissions.IsAuthenticated]

class PdiDelViewSet(viewsets.ModelViewSet):
    '''Exibindo todos os PDI's excluidos'''
    queryset = PdiDeletion.objects.all()
    serializer_class = PdiDelSerializer
    #permission_classes = [permissions.IsAuthenticated]
