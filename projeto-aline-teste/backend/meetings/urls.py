from django.contrib import admin
from django.urls import path, include
from meetings.api.viewsets import MeetingViewSet, MeetingDeletionViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('meetings', MeetingViewSet, basename='Meetings') 
router.register('meetingdeletion', MeetingDeletionViewSet, basename='MeetingsDeletion')

urlpatterns = [
    path('', include(router.urls)),
]
