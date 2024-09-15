from rest_framework import serializers
from .models import Booking
from trains.models import Train

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'user', 'train', 'date_of_travel', 'seat_number', 'status']
        read_only_fields = ['user']

    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['user'] = user
        return super().create(validated_data)
