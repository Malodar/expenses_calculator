from django.urls import path
from . import views

urlpatterns = [
    path('currencies/', views.getCurrencies, name='currencies'),
    path('currencies/add/', views.addCurrencies, name='add-currencies'),

    path('money-place/', views.getMoneyPlaces, name='money-places'),
    path('money-place/add', views.addMoneyPlaces, name='add-money-places'),
]