from django.urls import path, include
from .api.viewsets import PdiViewSet,PdiDelViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'pdi', PdiViewSet, basename='PDI')
router.register(r'pdi_delete', PdiDelViewSet, basename='PDI_DELETADO')

urlpatterns = [
    path('', include(router.urls)),
]