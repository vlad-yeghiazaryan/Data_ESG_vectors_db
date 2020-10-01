# Generated by Django 3.1.1 on 2020-09-26 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vectors_db', '0002_auto_20200926_1640'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vector',
            old_name='name',
            new_name='fill',
        ),
        migrations.RenameField(
            model_name='vector',
            old_name='positionX',
            new_name='stroke_width',
        ),
        migrations.RenameField(
            model_name='vector',
            old_name='positionY',
            new_name='x2',
        ),
        migrations.AddField(
            model_name='vector',
            name='id_number',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vector',
            name='shape_type',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vector',
            name='stroke',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vector',
            name='stroke_dasharray',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vector',
            name='stroke_linecap',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vector',
            name='stroke_linejoin',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vector',
            name='style',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vector',
            name='x1',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vector',
            name='y1',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vector',
            name='y2',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]