from log.models import Log
from rest_framework import permissions
from rest_framework import viewsets
from .serializers import LogSerializer

class LogViewSet(viewsets.ModelViewSet):
    """Exibindo todos os logs"""
    queryset = Log.objects.all()
    serializer_class = LogSerializer
    # permission_classes = [permissions.IsAuthenticated]