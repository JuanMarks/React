from django.contrib import admin
from log.models import Log

class ListLog(admin.ModelAdmin):
    list_display = ('log_id', 'log_user', 'log_date')

admin.site.register(Log, ListLog)

