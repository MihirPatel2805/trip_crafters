from django.urls import path
from .views import HotelListAPIView
urlpatterns = [
    path('featchHotels/', HotelListAPIView.as_view()),
]