from rest_framework import serializers
from .models import Hotel, HotelImage,Room

class HotelImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelImage
        fields = ['id', 'image']  # You can add any additional fields you need

class HotelSerializer(serializers.ModelSerializer):
    # Use the HotelImageSerializer to handle the nested images
    images = HotelImageSerializer(many=True, read_only=True)

    class Meta:
        model = Hotel
        fields = ['id', 'name', 'location', 'description', 'rating', 'price_per_night', 'amenities', 'available_rooms', 'images']


class RoomSerializer(serializers.ModelSerializer):
    hotel=serializers.ReadOnlyField(source='hotel.name')
    class Meta:
        model = Room
        fields = [
            'id',               # Primary Key
            'hotel',            # Foreign Key to Hotel model
            'room_type',        # Type of room (e.g., Deluxe, Standard)
            'price_per_night',  # Price per night for this room type
            'max_guests',       # Maximum number of guests allowed
            'number_of_rooms',  # Number of rooms of this type
            'description',      # Description of the room
            'image_urls',       # List of image URLs for the room
        ]