from django.db import models
from datetime import datetime
from meetings.models import Meetings

class Feedback(models.Model):
    
    feedback_id = models.BigAutoField(primary_key=True)
    feedback_name = models.CharField('Nome', max_length=100, null=False, blank=False)
    feedback_message = models.TextField('Mensagem', null=False, blank=False)
    feedback_date_created = models.DateField('Data de Criação', auto_now_add=True)
    feedback_evaluation = models.IntegerField('Avaliações', default=0, null=False)

    def __str__(self):
        return self.feedback_name

class FeedbackDelete(models.Model):

    fd_id = models.BigAutoField(primary_key=True)
    fd_ip = models.CharField('Ip',max_length=100)
    fd_browser = models.CharField(max_length=50)
    fd_date_deleted = models.DateTimeField("Data de Deleção", auto_now_add=True)
    fd_name = models.CharField('Nome', max_length=100, null=False, blank=False)
    fd_message = models.TextField('Mensagem', null=False, blank=False)
    fd_date_created = models.DateField('Data de Criação', auto_now_add=True)
    fd_evaluation = models.IntegerField('Avaliações', default=0, null=False)

    class Meta:
        verbose_name_plural = "Feedbacks de Deleção"


    def __str__(self):
        return self.fd_name