# Generated by Django 3.1.2 on 2020-10-17 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vectors_db', '0003_auto_20201017_1805'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vector',
            name='original_fill',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_id',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_stroke',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_stroke_width',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_style',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_type',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_x1',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_x2',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_y1',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='vector',
            name='original_y2',
            field=models.FloatField(null=True),
        ),
    ]
