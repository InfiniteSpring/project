from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('', include('core.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) #при выгрузке на сервер
