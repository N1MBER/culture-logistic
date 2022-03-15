from django.db import models


# Create your models here.


class Image(models.Model):
    image = models.ImageField(null=False)

    def __str__(self):
        return self.image.url


class Event(models.Model):
    name = models.CharField(max_length=128)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    gallery = models.ManyToManyField(Image, blank=True, related_name="event_gallery")
    image = models.ForeignKey(Image, null=True, on_delete=models.SET_NULL, blank=True, related_name="image_place")
    description = models.TextField(blank=True)
    place = models.ForeignKey("Place", on_delete=models.CASCADE, related_name="events")

    def __str__(self):
        return f"{self.name} ({self.pk})"


class WorkingDay(models.Model):
    class WeekDayChoices(models.TextChoices):
        mon = "mon", "Понедельник"
        tue = "tue", "Вторник"
        wed = "wed", "Среда"
        thu = "thu", "Четверг"
        fri = "fri", "Пятница"
        sat = "sat", "Субботу"
        sun = "sun", "Воскресенье"

    place = models.ForeignKey("Place", on_delete=models.CASCADE, related_name="work_time")
    week_day = models.CharField(max_length=4, choices=WeekDayChoices.choices)
    start_time = models.TimeField()
    end_time = models.TimeField()

    class Meta:
        unique_together = [['place', 'week_day']]


class Place(models.Model):
    name = models.CharField(max_length=128)
    coordinate_lat = models.FloatField()
    coordinate_lon = models.FloatField()
    address = models.CharField(max_length=512, blank=True)
    description = models.TextField()
    gallery = models.ManyToManyField(Image, blank=True, related_name="place_gallery")
    image = models.ForeignKey(Image, null=True, blank=True, on_delete=models.SET_NULL, related_name="place_image")

    def __str__(self):
        return f"{self.name} ({self.pk})"
