from django.contrib import admin
from .models import HouseRent, UsedStuffSale, HomemadeFood, DailyNews

admin.site.register(HouseRent)
admin.site.register(UsedStuffSale)
admin.site.register(HomemadeFood)
admin.site.register(DailyNews)
