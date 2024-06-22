from rest_framework import serializers
from .models import HouseRent, UsedStuffSale, HomemadeFood, DailyNews


class HouseRentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseRent
        fields = '__all__'


class UsedStuffSaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsedStuffSale
        fields = '__all__'


class HomemadeFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomemadeFood
        fields = '__all__'


class DailyNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyNews
        fields = '__all__'
