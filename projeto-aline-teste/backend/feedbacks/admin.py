from django.contrib import admin
from feedbacks.models import Feedback, FeedbackDelete

class ListFeedback(admin.ModelAdmin):
    list_display = ('feedback_id','feedback_name', 'feedback_date_created', 'feedback_evaluation')
    list_display_links = ('feedback_id', 'feedback_name')
    search_fields = ('feedback_name',)
    list_filter = ('feedback_name', 'feedback_date_created', 'feedback_evaluation')
    list_per_page = 10

class ListFeedbackDelete(admin.ModelAdmin):
    list_display = ('fd_id', 'fd_ip', 'fd_browser', 'fd_date_deleted', 'fd_name', 'fd_message', 'fd_date_created', 'fd_evaluation')
    list_display_links = ('fd_id', 'fd_name')
    search_fields = ('fd_name',)
    list_filter = ('fd_name', 'fd_date_deleted', 'fd_evaluation')
    list_per_page = 10 

    
admin.site.register(Feedback, ListFeedback)
admin.site.register(FeedbackDelete, ListFeedbackDelete)
