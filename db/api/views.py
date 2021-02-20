from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import PruebaSerializer
from .models import Prueba


class PruebaViewSet(viewsets.ModelViewSet):
    queryset = Prueba.objects.all().order_by('column1')
    serializer_class = PruebaSerializer
