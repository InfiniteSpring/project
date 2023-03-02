from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.auth import views as auth_views
from django.contrib.auth.models import Group
from django.contrib.auth import logout, get_user_model
from .forms import CustomUserCreationForm, LoginForm
from django.contrib.auth.decorators import login_required, permission_required
from .models import Orders
from django.contrib import messages
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from django.http import HttpResponseRedirect, HttpResponseNotFound
from django.views.generic import ListView
from .forms import OrderForm
from django.db.models import Q

from .tokens import account_activation_token


def activate(request, uidb64, token):
    User = get_user_model()
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except:
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()

        messages.success(request, "Администратор подтвердил регистрацию. Теперь войдите в ваш аккаунт.")
        return redirect('login')
    else:
        messages.error(request, "Аккаунт не был подтверждён.")

    return redirect('homepage')

def activateEmail(request, user, to_email):
    mail_subject = "Activate user account."
    message = render_to_string("core/template_activate_account.html", {
        'user': user,
        'domain': get_current_site(request).domain,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
        "protocol": 'https' if request.is_secure() else 'http'
    })
    email = EmailMessage(mail_subject, message, to=['den1ssapon4ik@gmail.com'])
    if email.send():
        messages.success(request, f'Уважаемый {user.username}. Ваш аккаунт необходимо верифицировать. Дождитесь подтверждения от администратора, а затем войдите.')

@login_required(login_url='/login/')
def homepage(request):
    info = Orders.objects.order_by('status', '-date')    
    return render(request, "homepage.html", {"info": info})
 

def search_by_address(request):
    info = Orders.objects.filter(address__contains=request.GET.get("q"))
    return render(request, "homepage.html", {"info": info})

def search_by_master(request):
    info = Orders.objects.filter(master__contains=request.GET.get("q"))
    return render(request, "homepage.html", {"info": info})

def orders_completed(request):
    info = Orders.objects.filter(status__icontains='Выполнен')
    return render(request, "homepage.html", {"info": info})

def orders_uncompleted(request):
    info = Orders.objects.filter(status__icontains='В обработке')
    return render(request, "homepage.html", {"info": info})
    

#сохранение данных в бд
def create(request):
    if request.method == "POST":
        info = Orders()
        info.name = request.POST.get("name")
        info.address = request.POST.get("address")
        info.employee = request.POST.get("employee")
        info.master = request.POST.get("master")
        info.equipment = request.POST.get("equipment")
        info.breaking = request.POST.get("breaking")
        info.status = request.POST.get("status")
        info.date = request.POST.get("date")
        info.note = request.POST.get("note")
        info.save()
    return HttpResponseRedirect("/")

# изменение данных в бд
def edit(request, id):    
    '''template = 'edit.html'
    get_order = Orders.objects.get(id=id)
    context = {
        'get_order': get_order,
        'update': True,
        'form': OrderForm(instance=get_order),
    }
    return render(request, template, context)'''
    url = request.META.get('HTTP_REFERER')
    try:
        info = Orders.objects.get(id=id)

        if request.method == "POST":
            info.name = request.POST.get("name")
            info.address = request.POST.get("address")
            info.employee = request.POST.get("employee")
            info.master = request.POST.get("master")
            info.equipment = request.POST.get("equipment")
            info.breaking = request.POST.get("breaking")
            info.status = request.POST.get("status")
            info.date = request.POST.get("date")
            info.note = request.POST.get("note")
            info.save()
            return HttpResponseRedirect("/")
        else:
            return render(request, "edit.html", {"info": info})
    except Orders.DoesNotExist:
        return HttpResponseNotFound("<h2>Order not found</h2>")

# удаление данных из бд
def delete(request, id):
    try:
        info = Orders.objects.get(id=id)
        info.delete()
        url = request.META.get('HTTP_REFERER')       
        if 'search_by_address' or 'search_by_master' in url:
            return HttpResponseRedirect(url)
        else:
            return HttpResponseRedirect("/")
    except Orders.DoesNotExist:
        return HttpResponseNotFound("<h2>Orders not found</h2>")

class SignUpView(CreateView): 
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('homepage')
    template_name = 'core/signup.html'

    def post(self, request, *args, **kwargs):
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active=False
            user.save()
            user_group = Group.objects.get(name=form.cleaned_data['groups'])
            user.groups.add(user_group)
            activateEmail(request, user, form.cleaned_data.get('email'))

            return redirect('homepage')
        else:
            return render(request, self.template_name, {'form' : form })


class LoginView(auth_views.LoginView):
    form_class = LoginForm
    template_name = 'core/login.html'
    redirect_field_name = 'homepage'


def logout_view(request):
    logout(request)
    return redirect('login')

