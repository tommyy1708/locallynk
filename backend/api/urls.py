from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import HouseRentViewSet, UsedStuffSaleViewSet, HomemadeFoodViewSet, DailyNewsViewSet, UserLoginView, user_detail, user_list, register_user


router = DefaultRouter()
router.register(r'houserent', HouseRentViewSet)
router.register(r'usedstuffsale', UsedStuffSaleViewSet)
router.register(r'homemadefood', HomemadeFoodViewSet)
router.register(r'dailynews', DailyNewsViewSet)


urlpatterns = [
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('register/', register_user, name='register-user'),
    path('users/', user_list, name='user-list'),
    path('user/<int:pk>/', user_detail, name='user-detail'),
]
