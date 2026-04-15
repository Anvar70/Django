# from django.shortcuts import render

# from django.http import HttpResponse

# def home(request):
#     return HttpResponse("Hello, world!")

# def home(request):
#     return render(request, 'home.html')

from django.shortcuts import render
from . import models
def home(request):
    return render(request, 'index.html')
def users(request):
    # users = [
    #     {'ism': 'Saidakbar', 'familiya': 'Afzalxonov', 'yosh': 12},
    #     {'ism': 'Azizbek', 'familiya': 'Abduraximov', 'yosh': 15},
    #     {'ism': 'Islom', 'familiya': 'Toshboltayev', 'yosh': 14},
    # ]

    users = models.User.objects.all()
    return render(request, 'index.html', context={'users': users})