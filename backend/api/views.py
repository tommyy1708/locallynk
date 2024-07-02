from django.shortcuts import render
from rest_framework import viewsets, status
from .models import HouseRent, UsedStuffSale, HomemadeFood, DailyNews,CustomUser
from .serializers import HouseRentSerializer, UsedStuffSaleSerializer, HomemadeFoodSerializer, DailyNewsSerializer,CustomUserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny

from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.settings import api_settings
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenViewBase


User = get_user_model()


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    if request.method == 'POST':
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
# Change to IsAuthenticated for authenticated access
@permission_classes([IsAuthenticated])
def user_list(request):
    if request.method == 'GET':
        users = CustomUser.objects.all()
        serializer = CustomUserSerializer(users, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_detail(request, pk):
    try:
        user = CustomUser.objects.get(pk=pk)
    except CustomUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CustomUserSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CustomUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CustomTokenRefreshView(TokenViewBase):
    """
    Takes a refresh type JSON web token and returns an access type JSON web
    token if the refresh token is valid.
    """
    _serializer_class = api_settings.TOKEN_REFRESH_SERIALIZER

    def post(self, request, *args, **kwargs):
        # Extract the refresh token from the request data
        refresh_token = request.data.get('refresh')

        # If a refresh token is provided
        if refresh_token:
            # Blacklist the provided refresh token
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except Exception as e:
                return Response({"detail": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)

        # Proceed with the standard token refresh process
        response = super().post(request, *args, **kwargs)
        return response


# Assign the view to a variable to use in the URL configuration
custom_token_refresh = CustomTokenRefreshView.as_view()

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
