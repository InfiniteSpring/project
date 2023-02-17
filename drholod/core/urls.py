from django.contrib import admin
from django.urls import path, include
from . import views
from .views import SignUpView, LoginView


urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout')
]
