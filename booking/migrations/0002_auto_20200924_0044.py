# Generated by Django 3.1.1 on 2020-09-23 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parking',
            name='park_no',
            field=models.BooleanField(default=True),
        ),
    ]