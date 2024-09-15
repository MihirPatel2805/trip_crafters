from django.db import models

# Create your models here.
class Hotel(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.FloatField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    amenities = models.JSONField()  # List of amenities
    image_urls = models.JSONField()  # List of image URLs
    available_rooms = models.IntegerField()