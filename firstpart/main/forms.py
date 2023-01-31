from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User   
from django.core.exceptions import ValidationError  
from django.forms.fields import EmailField  
from django.forms.forms import Form


# Create your forms here.

class CustomUserCreationForm(UserCreationForm):  
    username = forms.CharField(label='ФИО', min_length=5, max_length=150)  
    email = forms.EmailField(label='Электронная почта')  
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput)  
    password2 = forms.CharField(label='Подтверждение пароля', widget=forms.PasswordInput)  
  
    def username_clean(self):  
        username = self.cleaned_data['username'].lower()  
        new = User.objects.filter(username = username)  
        if new.count():  
            raise ValidationError("Такой пользователь уже зарегистрирован")  
        return username  
  
    def email_clean(self):  
        email = self.cleaned_data['email'].lower()  
        new = User.objects.filter(email=email)  
        if new.count():  
            raise ValidationError("Эта электронная почта уже используется")  
        return email  
  
    def clean_password2(self):  
        password1 = self.cleaned_data['password1']  
        password2 = self.cleaned_data['password2']  
  
        if password1 and password2 and password1 != password2:  
            raise ValidationError("Пароли не совпадают")  
        return password2  
  
    def save(self, commit = True):  
        user = User.objects.create_user(  
            self.cleaned_data['username'],  
            self.cleaned_data['email'],  
            self.cleaned_data['password1']  
        )  
        return user