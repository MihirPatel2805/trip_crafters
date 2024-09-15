from rest_framework import generics
from .models import Train, Station, Route
from .serializers import TrainSerializer, StationSerializer, RouteSerializer

class TrainListView(generics.ListAPIView):
    queryset = Train.objects.all()
    serializer_class = TrainSerializer

class StationListView(generics.ListAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

class TrainDetailView(generics.RetrieveAPIView):
    queryset = Train.objects.all()
    serializer_class = TrainSerializer
    lookup_field = 'number'
