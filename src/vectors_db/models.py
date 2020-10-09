from django.db import models


# Create your models here.
class Vector(models.Model):
  original_fill = models.CharField(max_length=10)
  original_stroke = models.CharField(max_length=10)
  original_stroke_width = models.FloatField()
  original_style = models.CharField(max_length=30)
  original_x1 = models.FloatField()
  original_y1 = models.FloatField()
  original_x2 = models.FloatField()
  original_y2 = models.FloatField()
  original_id = models.CharField(max_length=20)
  original_stroke_linejoin = models.CharField(max_length=30, null=True, blank=True)
  original_stroke_linecap = models.CharField(max_length=30, null=True, blank=True)
  original_stroke_dasharray = models.CharField(max_length=30, null=True, blank=True)
  original_type = models.CharField(max_length=15)
