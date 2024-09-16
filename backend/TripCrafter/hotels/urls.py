from django.urls import path
from .views import HotelListAPIView, HotelDetailAPIView
urlpatterns = [
    path('featchHotels/', HotelListAPIView.as_view()),
    path('hotel/<int:hotel_id>/', HotelDetailAPIView.as_view()),
]