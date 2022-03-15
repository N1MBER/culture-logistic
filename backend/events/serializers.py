from typing import List

from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import OpenApiExample, extend_schema_serializer, extend_schema_field
from rest_framework.fields import ImageField
from rest_framework.relations import StringRelatedField
from rest_framework.serializers import ModelSerializer, Serializer

from events.models import Event, WorkingDay, Place, Image


class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = ('image',)


class WorkingDaySerializer(ModelSerializer):
    class Meta:
        model = WorkingDay
        fields = ('start_time', 'end_time')


class WorkTimeSerializer(Serializer):
    mon = WorkingDaySerializer(read_only=True, allow_null=True)
    tue = WorkingDaySerializer(read_only=True, allow_null=True)
    wed = WorkingDaySerializer(read_only=True, allow_null=True)
    thu = WorkingDaySerializer(read_only=True, allow_null=True)
    fri = WorkingDaySerializer(read_only=True, allow_null=True)
    sat = WorkingDaySerializer(read_only=True, allow_null=True)
    sun = WorkingDaySerializer(read_only=True, allow_null=True)

    def to_representation(self, work_time_manager):
        qs = work_time_manager.all()
        res = {
            "mon": None,
            "tue": None,
            "wed": None,
            "thu": None,
            "fri": None,
            "sat": None,
            "sun": None
        }
        for working_day in qs:
            sr = WorkingDaySerializer()
            res[working_day.week_day] = sr.to_representation(instance=working_day)
        return res


class EventSerializer(ModelSerializer):
    image = ImageSerializer(read_only=True)
    gallery = ImageSerializer(read_only=True, many=True)

    class Meta:
        model = Event
        fields = '__all__'


class PlaceSerializer(ModelSerializer):
    work_time = WorkTimeSerializer(read_only=True)
    image = ImageSerializer(read_only=True)

    gallery = ImageSerializer(read_only=True, many=True)
    events = EventSerializer(read_only=True, many=True)

    class Meta:
        model = Place
        fields = '__all__'
