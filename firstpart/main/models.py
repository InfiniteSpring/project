from django.db import models


class Orders(models.Model):

    name = models.CharField('Имя клиента', max_length= 50, default= '')
    address = models.CharField('Адресс', min_lenth= 3, max_lenth= 50)
    employee = models.CharField('Имя сотрудника', max_lenth= 100, default= '')
    equipment = models.CharField('Оборудование', max_lenth = 45, defuult= '')
    breaking = models.CharField('Поломка', max_length= 45, default= '')
    status = models.CharField('Статус', max_length= 45, default= '')
    date = models.DateField('Дата')
    note = models.CharField('Примечания', max_length= 250, default= '')

    def __str__(self):              #не уверен
        return self.title

#в терминале сделать makemigrations