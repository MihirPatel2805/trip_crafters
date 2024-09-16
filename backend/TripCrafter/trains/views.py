from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Train
from .serializers import TrainSerializer
from rest_framework import status
# Create your views here.
class TrainViewSet(APIView):
    def get(self, request):
        trains = Train.objects.all()
        serializer = TrainSerializer(trains, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)