from rest_framework import serializers
from .models import Prueba


class PruebaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Prueba
        fields = ('id', 'column1', 'column2')
