from rest_framework import serializers
from log.models import Log

class LogSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Log
        fields = ['log_id', 'log_desc_1', 'log_desc_2', 'log_host', 'log_user', 'log_date']