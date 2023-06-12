from django.contrib import admin
from pdi.models import Pdi, PdiDeletion

class PdiList(admin.ModelAdmin):
    list_display = ('pdi_id','pdi_skill','pdi_goal','pdi_action','pdi_time',)
    list_display_links = ('pdi_id','pdi_goal','pdi_time',)

admin.site.register(Pdi, PdiList)

class PdiDelList(admin.ModelAdmin):
    list_display = ('pd_id','pd_ip','pd_browser','pd_date_deletion','pd_id_pdi','pd_skill','pd_goal','pd_action','pd_time',)
  
admin.site.register(PdiDeletion,PdiDelList)
