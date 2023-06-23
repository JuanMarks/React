from rest_framework import serializers
from .models import CasaAlugada, Casas

class CasaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casas
        fields = '__all__'

class CasaAlugadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CasaAlugada
        fields = '__all__'