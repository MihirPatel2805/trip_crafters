from rest_framework import generics
from .models import Train, Station, Route ,Coach
from .serializers import CoachSerializer, StationSerializer ,TrainSerializer
class TrainListView(generics.ListCreateAPIView):
    queryset = Train.objects.all()
    serializer_class = TrainSerializer

class StationListView(generics.ListAPIView):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

class CoachView(generics.ListAPIView):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer

class TrainDetailView(generics.RetrieveAPIView):
    queryset = Train.objects.all()
    serializer_class = TrainSerializer
    lookup_field = 'id'  # This will look for 'id' in the URL