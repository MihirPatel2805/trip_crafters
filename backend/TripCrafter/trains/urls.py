from django.urls import path
from .views import TrainViewSet
urlpatterns = [
    path('fetchTrainData', TrainViewSet.as_view()),
]