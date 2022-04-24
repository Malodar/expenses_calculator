from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CurrencySerializer, MoneyStorageSerializer
from .models import Currency, MoneyStorage
from rest_framework import status
from django.contrib.auth.models import User


@api_view(['GET'])
def getCurrencies(request):
    currencies = Currency.objects.all()
    serializer = CurrencySerializer(currencies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addCurrencies(request):
    data = request.data
    try:
        if data['is_basic_currency']:
            # Set previous basic currency field to False
            Currency.objects.filter(is_basic_currency=True).update(is_basic_currency=False)
        print(data['is_basic_currency'])
        currency = Currency.objects.create(
            user=User.objects.get(pk=data['user']),
            name=data['name'],
            code=data['code'],
            is_basic_currency=data['is_basic_currency'],
        )
        serializer = CurrencySerializer(currency, many=False)
        return Response(serializer.data)
    except:
        message = {
            'detail': 'Currency with this name already exists'
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def getMoneyPlaces(request):
    moneyStorages = MoneyStorage.objects.all()
    serializer = MoneyStorageSerializer(moneyStorages, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addMoneyPlaces(request):
    data = request.data
    try:
        moneyStorage = MoneyStorage.objects.create(
            user=data['user'],
            name=data['name'],
            description=data['description'],
            icon=data['icon'],
        )
        serializer = CurrencySerializer(moneyStorage, many=False)
        return Response(serializer.data)
    except:
        message = {
            'detail': 'Money Storage with this name already exists'
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)