from django.urls import path
from .views import TrainListView, StationListView, CoachView ,TrainDetailView
urlpatterns = [
    path('trains/', TrainListView.as_view(), name='train-list'),
    path('stations/', StationListView.as_view(), name='station-list'),
    path('coaches/', CoachView.as_view(), name='train-detail'),
    path('trains/<str:id>/', TrainDetailView.as_view(), name='train-detail'),  # URL for fetching train by ID
]
