from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'
