from django.shortcuts import render

# Create your views here.
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ReadOnlyModelViewSet

from events.models import Place
from events.serializers import PlaceSerializer


class PlaceViewSet(ReadOnlyModelViewSet):
    queryset = Place.objects.prefetch_related('work_time', 'events', 'gallery', 'image')
    serializer_class = PlaceSerializer
    filter_backends = (SearchFilter,)
    search_fields = ('name', 'description')
