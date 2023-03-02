from django.contrib import admin
from django.urls import path, re_path
from . import views
from .views import SignUpView, LoginView


urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('create/', views.create),
    path('edit/<int:id>/', views.edit),
    path('delete/<int:id>', views.delete),
    path('completed_orders', views.orders_completed),
    path('uncompleted_orders', views.orders_uncompleted),
    path('search_by_address/', views.search_by_address, name='search_by_address'),
    path('search_by_master/', views.search_by_master, name='search_by_master'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
]
