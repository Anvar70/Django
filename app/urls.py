from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.users_list, name='users_list'),
    path('user/create/', views.user_create, name='user_create'),
    path('user/<slug:slug>/', views.user_view, name='user_view'),
    path('user/<slug:slug>/update/', views.user_update, name='user_update'),
    path('user/<slug:slug>/delete/', views.user_delete, name='user_delete'),
]