from django.shortcuts import render
from rest_framework import viewsets
from .models import HouseRent, UsedStuffSale, HomemadeFood, DailyNews
from .serializers import HouseRentSerializer, UsedStuffSaleSerializer, HomemadeFoodSerializer, DailyNewsSerializer


class HouseRentViewSet(viewsets.ModelViewSet):
    queryset = HouseRent.objects.all()
    serializer_class = HouseRentSerializer


class UsedStuffSaleViewSet(viewsets.ModelViewSet):
    queryset = UsedStuffSale.objects.all()
    serializer_class = UsedStuffSaleSerializer


class HomemadeFoodViewSet(viewsets.ModelViewSet):
    queryset = HomemadeFood.objects.all()
    serializer_class = HomemadeFoodSerializer


class DailyNewsViewSet(viewsets.ModelViewSet):
    queryset = DailyNews.objects.all()
    serializer_class = DailyNewsSerializer

# Create your views here.
