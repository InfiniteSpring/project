from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm


from .models import CustomUser
 

class CustomUserCreationForm(UserCreationForm):
    username = forms.CharField(label='')
    email = forms.EmailField(label='')
    password1 = forms.CharField(label='')
    password2 = forms.CharField(label='')
    groups = forms.ModelChoiceField(label='Должность', queryset=Group.objects.all())
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        count = 0
        placeholders = ['ФИО', 'Электронная почта', 'Пароль', 'Подтверждение пароля', 'Должность']
        for visible in self.visible_fields():
            visible.field.widget.attrs['class'] = 'form-control'
            visible.field.widget.attrs['placeholder'] = placeholders[count]
            count += 1


    class Meta:
        model = CustomUser
        fields = ('username', 'email',)

        widgets = {
        'placeholder' : {
            'username': 'Элетронная почта'
        }
    }


        


class LoginForm(AuthenticationForm):
    username = forms.CharField(label='')  
    password = forms.CharField(label='')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        count = 0
        placeholders = ['Электронная почта', 'Пароль']
        for visible in self.visible_fields():
            visible.field.widget.attrs['class'] = 'form-control'
            visible.field.widget.attrs['placeholder'] = placeholders[count]
            count += 1
