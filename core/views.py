from django.shortcuts import render
from django.views.generic import TemplateView
from .models import *
from django.conf import settings
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import *

class ReactTemplateView(TemplateView):
    template_name = 'index.html'

class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class BannersViewSet(viewsets.ModelViewSet):
    queryset = Banner.objects.filter(status='Y')
    serializer_class = BannersSerializer

class FooterDataViewSet(viewsets.ModelViewSet):
    queryset = ContactUs.objects.all()[:1]
    serializer_class = ContactUsSerializer
