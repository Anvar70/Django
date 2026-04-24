from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.users_list, name='users_list'),
    path('user/<int:user_id>/', views.user_view, name='user_view'),
]