# Generated by Django 4.2.7 on 2023-12-25 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='siteadminmodel',
            name='restaurantImage',
            field=models.FileField(upload_to='restaurantImages/'),
        ),
    ]
