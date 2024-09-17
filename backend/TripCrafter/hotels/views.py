from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Hotel,Room
from .serializers import HotelSerializer, HotelImageSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Q

class HotelListAPIView(APIView):
    def get(self, request):
        city = request.query_params.get('city')
        amenities = request.query_params.getlist('amenities')
        rating = request.query_params.get('rating')
        price = request.query_params.get('price')
        searchTerm = request.query_params.get('searchTerm')
        print(price)
        filters = Q()
        print(amenities)
        try:
            # Filter by city
            if city:
                filters &= Q(location__icontains=city)

            # Filter by rating
            if rating:
                filters &= Q(rating__gte=rating)

            # Filter by price (assumes price range is passed as "min-max")
            if price:
                min_price, max_price = map(float, price.split('-'))
                filters &= Q(price_per_night__gte=min_price, price_per_night__lte=max_price)
                print(filters)
            # Filter by amenities
            if amenities:
                for amenity in amenities:
                    filters &= Q(amenities__icontains=amenity)

            # Filter by search term (searching in name and description)
            if searchTerm:
                filters &= Q(name__icontains=searchTerm) | Q(description__icontains=searchTerm)

            # Apply filters
            hotels = Hotel.objects.filter(filters).all()
            print(hotels)
            # Serialize the filtered data
            serializer = HotelSerializer(hotels, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
# class HotelListAPIView(APIView):
#     def get(self, request):
#         city = request.query_params.get('city')
#         amenities = request.query_params.get('amenities')
#         rating = request.query_params.get('rating')
#         price = request.query_params.get('price')
#         searchTerm = request.query_params.get('searchTerm')
#         try:
#             if city:
#                 hotels = Hotel.objects.filter(location__icontains=city).all()
#                 serializer = HotelSerializer(hotels, many=True)
#                 return Response(serializer.data, status=status.HTTP_200_OK)
#             else:
#                 hotels = Hotel.objects.all()
#                 serializer = HotelSerializer(hotels, many=True)
#                 print(serializer.data)
#                 return Response(serializer.data, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class HotelDetailAPIView(APIView):
    def get_object(self, pk):
        print(pk)
        return get_object_or_404(Hotel, pk=pk)

    def get(self, request, pk, *args, **kwargs):
        hotel = self.get_object(pk)
        print(hotel)
        serializer = HotelSerializer(hotel)
        return Response(serializer.data , status=status.HTTP_200_OK)

# class RoomDetailAPIView(APIView):
#     def get(self, request):
#         room = Room.objects.all()
#         print(room)
#         serializer = RoomSerializer(room)
#         return Response(serializer.data, status=status.HTTP_200_OK)