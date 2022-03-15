from django.contrib import admin

# Register your models here.
from django import forms
from django.contrib.admin import StackedInline

from events.models import Place, Event, WorkingDay, Image


class WorkingDayInline(StackedInline):
    model = WorkingDay


class PlaceAdmin(admin.ModelAdmin):
    inlines = (WorkingDayInline,)
    pass


admin.site.register(Image)
admin.site.register(Place, PlaceAdmin)
admin.site.register(Event)
