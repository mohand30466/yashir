# Generated by Django 4.0 on 2022-04-08 21:54

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('api', '0010_userprofile_bio_userprofile_phone_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tittle', models.CharField(max_length=150)),
                ('discription', models.IntegerField(blank=True, default=False)),
                ('image', models.ImageField(blank=True, default='static/Media/Yashirlogo.png', null=True, upload_to=api.models.upload_file_to)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='bost', to='auth.user')),
            ],
        ),
    ]
