from django.db import models

class Meetings(models.Model):

    meetings_id = models.BigAutoField(primary_key=True) #id da reunião
    meetings_manager_name = models.CharField(max_length=45) #nome gerente
    meetings_collaborator_name = models.CharField(max_length=45) #nome colaborador
    meetings_title = models.CharField(max_length=50) #titulo reunião
    meetings_desc = models.CharField(max_length=150) #descrição reunião
    meetings_local = models.CharField(max_length=50) # local
    meetings_date = models.DateField(null=True, blank=True) #data
    meetings_time = models.TimeField(null=True, blank=True) #hora
    meetings_link = models.CharField(max_length=200, blank=True) #link
    meetings_status = models.CharField(max_length=100) #status da reunião
    
class MeetingsDeletion(models.Model):
    
    md_id = models.BigAutoField(primary_key=True) #id da deleção
    md_ip = models.CharField(max_length=100) #ip da maquina da deleção
    md_browser = models.CharField(max_length=100) # navegador ultilizado para deleção
    md_deletion_date = models.DateTimeField(auto_now_add=True) #data e hora da deleção
    md_id_meeting = models.CharField(max_length=50) # id da reunião deletada
    md_manager_name = models.CharField(max_length=45) #nome gerente
    md_collaborator_name = models.CharField(max_length=45) #nome colaborador
    md_title = models.CharField(max_length=50) #titulo reunião
    md_desc = models.CharField(max_length=150) #descrição reunião
    md_local = models.CharField(max_length=50) # local
    md_date = models.DateField(null=True, blank=True) #data
    md_time = models.TimeField(null=True, blank=True) #hora
    md_link = models.URLField(max_length=200, null=True, blank=True) #link
    md_status = models.CharField(max_length=100) #status da reunião
    
    
    
    