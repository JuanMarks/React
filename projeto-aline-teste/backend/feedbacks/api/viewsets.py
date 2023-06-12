from feedbacks.models import Feedback, FeedbackDelete
from rest_framework import permissions
from rest_framework import viewsets
from .serializers import FeedbackSerializer, FeedbackDeleteSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    """Exibindo todos os feedbacks"""
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    # permission_classes = [permissions.IsAuthenticated]
    
class FeedbackDeleteViewSet(viewsets.ModelViewSet):
    queryset = FeedbackDelete.objects.all()
    serializer_class = FeedbackDeleteSerializer
    
