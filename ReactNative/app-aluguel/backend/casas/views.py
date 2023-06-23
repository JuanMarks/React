from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CasaSerializer, CasaAlugadaSerializer
from .models import Casas, CasaAlugada
# Create your views here.

class CasaViewSet(viewsets.ModelViewSet):
    queryset = Casas.objects.all()
    serializer_class = CasaSerializer

class CasaAlugadaViewSet(viewsets.ModelViewSet):
    queryset = CasaAlugada.objects.all()
    serializer_class = CasaAlugadaSerializer