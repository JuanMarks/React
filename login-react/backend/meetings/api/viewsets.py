from meetings.models import Meetings, MeetingsDeletion
from rest_framework import permissions
from rest_framework import viewsets
from .serializers import MeetingSerializer, MeetingDeletionSerializer

class MeetingViewSet(viewsets.ModelViewSet):
    """Exibindo todos as Reuniões"""
    queryset = Meetings.objects.all()
    serializer_class = MeetingSerializer
    # permission_classes = [permissions.IsAuthenticated]
    
class MeetingDeletionViewSet(viewsets.ModelViewSet):
    """Exibindo todos as Reuniões deletadas"""
    queryset = MeetingsDeletion.objects.all()
    serializer_class = MeetingDeletionSerializer
    # permission_classes = [permissions.IsAuthenticated]
    