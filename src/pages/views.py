from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home_view(request, *args, **kargs):
  context = {
    'username': request.user
  }
  return render(request, 'DataESG/home.html', context)

def contacts_view(request, *args, **kargs):
  context = {
    'username': request.user
  }
  return render(request, 'contacts.html', context)
