from django.db import models

# Create your models here.

class Casas(models.Model):
    numero_casa = models.CharField(max_length=70, blank=True)
    valor = models.FloatField()

class CasaAlugada(models.Model):
    nome_pessoa = models.CharField(max_length=100, blank=True)
    dia_alugou = models.CharField(max_length=40, blank=True)
    