# Generated by Django 4.1.7 on 2023-04-15 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_orders_master'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='date',
            field=models.CharField(default='', max_length=20, verbose_name='Дата'),
        ),
    ]
