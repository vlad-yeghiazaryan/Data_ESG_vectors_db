from django.shortcuts import render

# Create your views here.
def vectorEditor_view(request, *args, **kargs):
  context = {
    'username': request.user
  }
  return render(request, 'vector-editor/index.html', context)