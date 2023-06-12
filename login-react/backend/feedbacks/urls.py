from django.contrib import admin
from django.urls import path, include
from feedbacks.api.viewsets import FeedbackViewSet, FeedbackDeleteViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('feedbacks', FeedbackViewSet, basename='Feedback') 
router.register('feedbacks_delete', FeedbackDeleteViewSet, basename='FeedbackDelete')


urlpatterns = [
    path('', include(router.urls)),
]
