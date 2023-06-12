from rest_framework import serializers
from feedbacks.models import Feedback, FeedbackDelete

class FeedbackSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Feedback
        fields = ['feedback_id','feedback_name','feedback_message', 'feedback_date_created', 'feedback_evaluation']

class FeedbackDeleteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FeedbackDelete
        fields = ['fd_id', 'fd_ip', 'fd_date_deleted','fd_name','fd_message', 'fd_date_created', 'fd_evaluation']
        