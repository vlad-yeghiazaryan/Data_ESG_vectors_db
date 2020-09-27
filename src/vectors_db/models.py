from django.db import models


# Create your models here.
class Vector(models.Model):
  fill = models.CharField(max_length=10)
  stroke = models.CharField(max_length=10)
  stroke_width = models.FloatField()
  style = models.CharField(max_length=30)
  x1 = models.FloatField()
  y1 = models.FloatField()
  x2 = models.FloatField()
  y2 = models.FloatField()
  id_number = models.CharField(max_length=20)
  stroke_linejoin = models.CharField(max_length=30, null=True, blank=True)
  stroke_linecap = models.CharField(max_length=30, null=True, blank=True)
  stroke_dasharray = models.CharField(max_length=30, null=True, blank=True)
  shape_type = models.CharField(max_length=15)
