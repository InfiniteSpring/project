from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    groups = forms.ModelChoiceField(queryset=Group.objects.all())
    
    class Meta:
        model = CustomUser
        fields = ('username', 'fio', 'email',)

class LoginForm(AuthenticationForm):
    username = forms.CharField(label='Электронная почта')    
