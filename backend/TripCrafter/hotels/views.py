from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Hotel,Room
from .serializers import HotelSerializer
from django.shortcuts import get_object_or_404



class HotelListAPIView(APIView):
    def get(self, request):
        city = request.GET.get('city')
        try:
            if city:
                hotels = Hotel.objects.filter(location__icontains=city).all()
                serializer = HotelSerializer(hotels, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                hotels = Hotel.objects.all()
                serializer = HotelSerializer(hotels, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class HotelDetailAPIView(APIView):
    def get_object(self, pk):
        print(pk)
        return get_object_or_404(Hotel, pk=pk)

    def get(self, request, pk, *args, **kwargs):
        hotel = self.get_object(pk)
        print(hotel)
        serializer = HotelSerializer(hotel)
        return Response(serializer.data , status=status.HTTP_200_OK)
