from django.db import models


# Create your models here.
class Prueba(models.Model):
    column1 = models.CharField(max_length=60)
    column2 = models.CharField(max_length=60)

    def __str__(self):
        return self.column1 + ' ' + self.column2
