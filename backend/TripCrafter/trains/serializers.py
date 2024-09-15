from rest_framework import serializers
from .models import Train, Station, Route

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = '__all__'

class TrainSerializer(serializers.ModelSerializer):
    start_station = StationSerializer()
    end_station = StationSerializer()

    class Meta:
        model = Train
        fields = '__all__'

class RouteSerializer(serializers.ModelSerializer):
    train = TrainSerializer()
    station = StationSerializer()

    class Meta:
        model = Route
        fields = '__all__'
