from rest_framework import serializers
from pdi.models import Pdi,PdiDeletion

class PdiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pdi
        fields = ['pdi_id','pdi_skill','pdi_goal','pdi_action','pdi_time']

class PdiDelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PdiDeletion
        fields = ['pd_id','pd_ip','pd_browser','pd_date_deletion','pd_id_pdi','pd_skill','pd_goal','pd_action','pd_time']