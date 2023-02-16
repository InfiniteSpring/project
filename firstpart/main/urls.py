from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path('signup/', views.SignUpView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.logout_request, name='logout'),
    path('orders/', views.orders_view, name='orders')
]