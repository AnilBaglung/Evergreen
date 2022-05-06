from rest_framework import serializers
from .models import Contact
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'fullname', 'email', 'phone', 'message']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name']
        extra_kwargs = {'password':{'write_only':True,'required':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
