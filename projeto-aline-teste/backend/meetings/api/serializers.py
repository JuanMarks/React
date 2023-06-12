from rest_framework import serializers
from meetings.models import Meetings, MeetingsDeletion

class MeetingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Meetings
        fields = ['meetings_id','meetings_manager_name','meetings_collaborator_name','meetings_title','meetings_desc','meetings_local','meetings_date','meetings_time','meetings_link','meetings_status']

class MeetingDeletionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MeetingsDeletion
        fields = ['md_id','md_ip','md_browser','md_deletion_date','md_id_meeting','md_manager_name','md_collaborator_name','md_title','md_desc','md_local','md_date','md_time','md_link','md_status']

