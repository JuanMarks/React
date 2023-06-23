from django.contrib import admin
from .models import CasaAlugada, Casas
# Register your models here.

class ListaCasas(admin.ModelAdmin):
    list_display = ('id','numero_casa', 'valor')
    list_display_links = ('id','numero_casa')

class ListaCasasAlugadas(admin.ModelAdmin):
    list_display = ('id','nome_pessoa', 'dia_alugou')
    list_display_links = ('id','nome_pessoa')

admin.site.register(Casas, ListaCasas)
admin.site.register(CasaAlugada, ListaCasasAlugadas)