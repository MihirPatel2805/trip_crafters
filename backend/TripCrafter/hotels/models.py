from django.db import models

# Create your models here.
class Hotel(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.FloatField()
    price_per_night = models.FloatField()
    amenities = models.JSONField()  # List of amenities
    available_rooms = models.IntegerField()

    def __str__(self):
        return self.name

class HotelImage(models.Model):
    hotel = models.ForeignKey(Hotel, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='hotels/')  # Upload images to 'media/hotels/'

    def __str__(self):
        return f"Image for {self.hotel.name}"

class Room(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE ,related_name='rooms')
    room_type = models.CharField(max_length=100)
    price_per_night = models.FloatField()
    max_guests = models.IntegerField()
    number_of_rooms = models.IntegerField()
    description = models.TextField()
