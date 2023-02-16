from django.db import models
from django.contrib.auth.models import AbstractUser


class Orders(models.Model):

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    name = models.CharField('Имя клиента', max_length= 50, default= '')
    address = models.CharField('Адресс', max_length= 50)
    employee = models.CharField('Имя сотрудника', max_length= 100, default= '')
    equipment = models.CharField('Оборудование', max_length = 45, default= '')
    breaking = models.CharField('Поломка', max_length= 45, default= '')
    status = models.CharField('Статус', max_length= 45, default= '')
    date = models.DateField('Дата')
    note = models.CharField('Примечания', max_length= 250, default= '')


    def __str__(self):              #не уверен
        return self.name

#в терминале сделать makemigrations 123

class CustomUser(AbstractUser):
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    username = models.CharField('Имя пользователя', max_length=255, unique=True)
    fio = models.CharField('ФИО сотрудника', max_length=255, unique=True)
    email = models.EmailField('Электронная почта', unique=True)