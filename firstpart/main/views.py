from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm, UserLoginForm
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm


def homepage(request):
    return render(request, 'main/homepage.html')


def register_request(request):
	if request.method == "POST":
		form = CustomUserCreationForm(request.POST)
		if form.is_valid():
			user = form.save()
			login(request, user)
			messages.success(request, "Регистрация успешна.")
			return redirect("homepage")
		messages.error(
		    request, "Регистрация не была завершена. Неверно введена информация.")
	form = CustomUserCreationForm()
	return render(request=request, template_name="main/register.html", context={"register_form": form})


def login_request(request):
	if request.method == "POST":
		form = AuthenticationForm(request, data=request.POST)
		if form.is_valid():
			username = form.cleaned_data.get('username')
			password = form.cleaned_data.get('password')
			user = authenticate(username=username, password=password)
			if user is not None:
				login(request, user)
				messages.info(request, f"Вы вошли как {username}.")
				return redirect("homepage")
			else:
				messages.error(request, "Неправильное имя пользователя или пароль.")
		else:
			messages.error(request, "Неправильное имя пользователя или пароль.")
	form = AuthenticationForm()
	return render(request=request, template_name="main/login.html", context={"login_form": form})


def login_request1(request):
    if request.method == "POST":
        form = UserLoginForm(request, data=request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            user = authenticate(email=email, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"Вы вошли как {email}.")
                return redirect("homepage")
            else:
                messages.error(request, "Неправильная электронная почта или пароль.")
        else:
             messages.error(request, "Неправильное имя пользователя или пароль.")
    form = UserLoginForm()
    return render(request=request, template_name="main/login.html", context={"login_form": form})

			


def logout_request(request):
	logout(request)
	messages.info(request, "Вы успешно вышли из аккаунта.") 
	return redirect("homepage")	