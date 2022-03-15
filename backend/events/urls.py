# Create your views here.
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from events.views import PlaceViewSet

router = SimpleRouter()
router.register("places", PlaceViewSet)

urlpatterns = [

              ] + router.urls
