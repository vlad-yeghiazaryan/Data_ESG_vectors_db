"""data_esg_server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from pages.views import home_view
from pages.views import contacts_view
from vectors_db.views import vectors_view, get_all_vectors
from vector_editor.views import vectorEditor_view

urlpatterns = [
    path('', home_view, name='home'),
    path('admin/', admin.site.urls),
    path('contacts/', contacts_view),
    path('vectors/', vectors_view, name='vectors'),
    path('vector-editor/', vectorEditor_view, name='vectors'),
    path('all_vectors/', get_all_vectors, name='all_vectors')
]
