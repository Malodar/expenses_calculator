from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CurrencySerializer
from .models import Currency


@api_view(['GET'])
def getCurrencies(request):
    currencies = Currency.objects.all()
    serializer = CurrencySerializer(currencies, many=True)
    return Response(serializer.data)
