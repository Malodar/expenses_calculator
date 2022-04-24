from django.urls import path
from . import views

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register'),
    path('users/profile/', views.getUserProfile, name='user-profile'),
    path('users/', views.getUsers, name='users'),

    path('currencies/', views.getCurrencies, name='currencies'),
    path('currencies/add/', views.addCurrencies, name='add-currencies'),
    path('currencies/delete/<str:pk>', views.deleteCurrencies, name='delete-currencies'),

    path('money-place/', views.getMoneyPlaces, name='money-places'),
    path('money-place/add', views.addMoneyPlaces, name='add-money-places'),
]