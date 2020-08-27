from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *

class ContactUsSerializer(ModelSerializer):

    class Meta:
        model = ContactUs
        exclude = ()
class ServiceSerializer(ModelSerializer):

    class Meta:
        model = Service
        exclude = ()