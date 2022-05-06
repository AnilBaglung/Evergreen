from django.shortcuts import render
from .models import Contact
from django.contrib.auth.models import User
from rest_framework import status, viewsets
from .serializers import ContactSerializer, UserSerializer
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.decorators import action
from django.contrib.auth.models import User


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all
    serializer_class = UserSerializer

