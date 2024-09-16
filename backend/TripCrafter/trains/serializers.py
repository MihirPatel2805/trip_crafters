from rest_framework import serializers
from .models import Station, Train, Coach, Route

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = '__all__'

class TrainSerializer(serializers.ModelSerializer):
    # Use nested serializers to include detailed information for related fields
    source = serializers.StringRelatedField()  # Display related Station as string
    destination = serializers.StringRelatedField()  # Display related Station as string

    class Meta:
        model = Train
        fields = '__all__'

class CoachSerializer(serializers.ModelSerializer):
    train = serializers.StringRelatedField()  # Display related Train as string

    class Meta:
        model = Coach
        fields = '__all__'

class RouteSerializer(serializers.ModelSerializer):
    train = serializers.StringRelatedField()  # Display related Train as string
    station = serializers.StringRelatedField()  # Display related Station as string

    class Meta:
        model = Route
        fields = '__all__'
