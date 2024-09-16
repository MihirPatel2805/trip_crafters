from rest_framework import generics
from .models import Train, Station, Route ,Coach
from .serializers import CoachSerializer, StationSerializer, RouteSerializer ,TrainSerializer

class TrainListView(generics.ListAPIView):
    queryset = Train.objects.all()
    serializer_class = TrainSerializer

class StationListView(generics.ListAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

class CoachView(generics.RetrieveAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
