from rest_framework import serializers
from .models import Hotel, HotelImage

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
