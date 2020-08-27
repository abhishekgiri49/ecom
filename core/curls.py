from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'services', views.ServicesViewSet)
router.register(r'footer', views.FooterDataViewSet)
urlpatterns = [
    path(r'api/core/', include(router.urls)),
    path('', views.ReactTemplateView.as_view(), name="react_template"),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
