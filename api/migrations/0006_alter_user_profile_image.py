# Generated by Django 4.0.2 on 2022-03-21 11:30

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_user_profile_accounttype_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_profile',
            name='image',
            field=models.ImageField(blank=True, upload_to=api.models.upload_file_to),
        ),
    ]
