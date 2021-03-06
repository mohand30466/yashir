# Generated by Django 4.0.2 on 2022-03-07 21:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_alter_user_profile_accounttype_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_profile',
            name='address',
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AlterField(
            model_name='user_profile',
            name='bio',
            field=models.TextField(blank=True, max_length=250),
        ),
        migrations.AlterField(
            model_name='user_profile',
            name='phone',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='user_profile',
            name='profisional',
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AlterField(
            model_name='user_profile',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL),
        ),
    ]
