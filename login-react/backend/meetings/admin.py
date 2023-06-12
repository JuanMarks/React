from django.contrib import admin
from meetings.models import Meetings, MeetingsDeletion

class ListMeeting(admin.ModelAdmin):
    list_display = ('meetings_id','meetings_manager_name','meetings_collaborator_name','meetings_title','meetings_desc','meetings_local','meetings_date','meetings_time','meetings_link','meetings_status')
    list_display_links = ('meetings_id', 'meetings_link', 'meetings_date')
    search_fields = ('meetings_id','meetings_date')
    list_filter = ('meetings_title',)
    list_per_page = 10

admin.site.register(Meetings, ListMeeting)


class ListMeetingDeletion(admin.ModelAdmin):
    list_display = ('md_id','md_ip','md_browser','md_deletion_date','md_id_meeting','md_manager_name','md_collaborator_name','md_title','md_desc','md_local','md_date','md_time','md_link','md_status')
    list_display_links = ('md_id', 'md_link', 'md_date')
    search_fields = ('md_id','md_date')
    list_filter = ('md_title','md_id')
    list_per_page = 10

admin.site.register(MeetingsDeletion, ListMeetingDeletion)
