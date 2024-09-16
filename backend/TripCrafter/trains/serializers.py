from rest_framework import serializers
from .models import Station, Train, Coach, Route

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = '__all__'

from rest_framework import serializers
from .models import Train, Coach

class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = ['id', 'coachType', 'numberOfSeats']

class TrainSerializer(serializers.ModelSerializer):
    coaches = CoachSerializer(many=True)  # Nested serializer to handle coaches

    class Meta:
        model = Train
        fields = ['id', 'trainName', 'trainNumber', 'source', 'destination', 'departureTime', 'arrivalTime', 'travelDuration', 'fare', 'availableSeats', 'trainType', 'daysOfOperation', 'coaches']
    
    def create(self, validated_data):
        coaches_data = validated_data.pop('coaches', [])
        train = Train.objects.create(**validated_data)
        for coach_data in coaches_data:
            Coach.objects.create(train=train, **coach_data)
        return train


class RouteSerializer(serializers.ModelSerializer):
    train = serializers.StringRelatedField()  # Display related Train as string
    station = serializers.StringRelatedField()  # Display related Station as string

    class Meta:
        model = Route
        fields = '__all__'
