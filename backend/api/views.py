from django.shortcuts import render

from django.http import JsonResponse

from django.conf import settings
from pathlib import Path

# Create your views here.

def hello(request):
    return JsonResponse({"message": "Hello to the Vue App from Django!"})

def index(request):
    index_file = settings.FRONTEND_DIST / "index.html"
    return render(request, index_file.name)  # Django va chercher dans DIRS (settings.py)

def frontend(request):
    return render(request, "index.html")