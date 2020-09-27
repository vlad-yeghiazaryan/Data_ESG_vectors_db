from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

from vectors_db.models import Vector

# Create your views here.
@csrf_exempt
def vectors_view(request, *args, **kargs):
  context = {
    'username': request.user
  }
  if request.method == 'GET':
   return render(request, 'post-vectors.html', context)
  elif request.method == 'POST':
    recevied_data = json.loads(request.body)
    Vector.objects.create(**recevied_data)
    print("\nData recevied: ")
    print(recevied_data)
  
    return HttpResponse('Vectors successfully saved.')