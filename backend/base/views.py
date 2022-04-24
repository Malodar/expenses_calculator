from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .serializers import CurrencySerializer, MoneyStorageSerializer, UserSerializerWithToken, UserSerializer
from .models import Currency, MoneyStorage
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data
    print(data)
    try:
        user = User.objects.create(
            username = data['username'],
            email = data['username'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {
            'detail': 'User with this email already exists'
        }
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCurrencies(request):
    currencies = Currency.objects.all()
    serializer = CurrencySerializer(currencies, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteCurrencies(request, pk):
    Currency.objects.get(pk=pk).delete()
    currencies = Currency.objects.all()
    serializer = CurrencySerializer(currencies, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addCurrencies(request):
    data = request.data
    try:
        # Set previous basic currency field to False
        if data['is_basic_currency']:
            Currency.objects.filter(is_basic_currency=True).update(is_basic_currency=False)
        # Add new currency
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