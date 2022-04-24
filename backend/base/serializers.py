from rest_framework import serializers
from .models import Currency, MoneyStorage
from django.contrib.auth.models import User


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'

class MoneyStorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoneyStorage
        fields = '__all__'