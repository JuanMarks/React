from django.db import models

class Log(models.Model):
    log_id = models.BigAutoField(primary_key=True)
    log_desc_1 = models.CharField(max_length=300, null= True)
    log_desc_2 = models.CharField(max_length=300, null= True)
    log_host = models.CharField(max_length=30)
    log_user = models.CharField(max_length=20)
    log_date = models.DateTimeField(auto_now_add=True)

    
    def str(self):
        return self.log_date
