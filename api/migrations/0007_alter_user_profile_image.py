# Generated by Django 4.0.2 on 2022-03-21 21:21

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_user_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_profile',
            name='image',
            field=models.ImageField(blank=True, default='images/Yashirlogo.png', null=True, upload_to=api.models.upload_file_to),
        ),
    ]
