from django.db import models

class Pdi(models.Model):
    pdi_id = models.BigAutoField(primary_key=True)
    pdi_skill = models.CharField("Habilidade",max_length=45, null=False, blank=False)
    pdi_goal = models.CharField("Meta",max_length=45, null=False, blank=False)
    pdi_action = models.CharField("Ação",max_length=45, null=False, blank=False)
    pdi_time = models.DateField("Prazo",blank=False)

    def __str__(self):
        return self.pdi_goal

class PdiDeletion(models.Model):

    pd_id = models.BigAutoField(primary_key=True)
    pd_ip = models.CharField("IP",max_length=20,null=False, blank=False)
    pd_browser= models.CharField("Navegador",max_length=100,null=False, blank=False)
    pd_date_deletion= models.DateTimeField("Data de deleção",auto_now_add=True)
    pd_id_pdi = models.CharField("ID do PDI",max_length=10, null=False, blank=False)
    pd_skill = models.CharField("Habilidade",max_length=45, null=False, blank=False)
    pd_goal = models.CharField("Meta",max_length=45, null=False, blank=False)
    pd_action = models.CharField("Ação",max_length=45, null=False, blank=False)
    pd_time = models.DateField("Prazo",blank=False)

