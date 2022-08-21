from operator import imod
from unicodedata import name
from django.urls import path
from .views import home

urlpatterns = [
    path('', home, name='home'),
]