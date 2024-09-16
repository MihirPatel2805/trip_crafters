from django.urls import path
from .views import TrainListView, StationListView, CoachView
urlpatterns = [
    path('trains/', TrainListView.as_view(), name='train-list'),
    path('stations/', StationListView.as_view(), name='station-list'),
    path('coaches/', CoachView.as_view(), name='train-detail'),
]
