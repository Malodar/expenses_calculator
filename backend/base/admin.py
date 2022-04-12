from django.contrib import admin
from .models import *


admin.site.register(Currency)
admin.site.register(MoneyStorage)
admin.site.register(IncomeSource)
admin.site.register(OutcomeCategory)

