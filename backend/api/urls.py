from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import HouseRentViewSet, UsedStuffSaleViewSet, HomemadeFoodViewSet, DailyNewsViewSet

router = DefaultRouter()
router.register(r'houserent', HouseRentViewSet)
router.register(r'usedstuffsale', UsedStuffSaleViewSet)
router.register(r'homemadefood', HomemadeFoodViewSet)
router.register(r'dailynews', DailyNewsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
