from rest_framework import serializers
from .models import HouseRent, UsedStuffSale, HomemadeFood, DailyNews, CustomUser
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

User = get_user_model()


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        print('serializer data:', data)
        email = data.get('email')
        password = data.get('password')
        user = authenticate(username=email, password=password)

        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid credentials")

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name',
                  'sex', 'date_of_birth', 'phone_number', 'address', 'password']
        read_only_fields = ['id', 'email']  # ID and email should not be modified by the client
        extra_kwargs = {
            'password': {'write_only': True}, # Password should not be included in the output
            'email': {'required': True},
            'password': {'required': True}
        }

    def validate_email(self, value):
        """
        Check that the email is valid and unique.
        """
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

    def validate_password(self, value):
        """
        Check that the password is valid.
        """
        if len(value) < 5:
            raise serializers.ValidationError(
                "Password must be at least 5 characters long.")
        # Add more password validation logic if needed (e.g., special characters, digits, etc.)
        return value

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(CustomUserSerializer, self).create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data.get('password'))
        return super(CustomUserSerializer, self).update(instance, validated_data)

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
