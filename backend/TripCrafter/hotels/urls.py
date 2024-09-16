from django.urls import path
from .views import HotelListAPIView ,HotelDetailAPIView
urlpatterns = [
    path('featchHotels/', HotelListAPIView.as_view()),
    path('hoteldetails/<int:pk>', HotelDetailAPIView.as_view()),
]