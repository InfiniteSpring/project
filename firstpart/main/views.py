from django.shortcuts import render, redirect
from django.contrib.auth import views as auth_views
from .forms import CustomUserCreationForm, LoginForm
from django.contrib.auth import logout, login, authenticate
from django.contrib import messages
from django.contrib.auth.models import Group
from django.urls import reverse_lazy
from django.views.generic import CreateView



class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('homepage')
    template_name = 'main/signup.html'

    def post(self, request, *args, **kwargs):
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            user_group = Group.objects.get(name=form.cleaned_data['groups'])
            user.groups.add(user_group)          
            logout(request)
            new_user = authenticate(username=form.cleaned_data['username'],
                                    password=form.cleaned_data['password1'],
                                    )
            login(request, new_user)

            return redirect('homepage')
        else:
            return render(request, self.template_name, {'form' : form })

class LoginView(auth_views.LoginView):
    form_class = LoginForm
    template_name = 'main/login.html'

def orders_view(request):
	return render(request, 'main/выполненные заказы.html')

def homepage(request):
	#info = Orders.object.all()
	return render(request, 'main/homepage.html')

def logout_request(request):
	logout(request)
	messages.info(request, "Вы успешно вышли из аккаунта.") 
	return redirect("homepage")	