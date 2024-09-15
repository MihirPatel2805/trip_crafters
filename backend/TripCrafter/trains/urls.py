from django.urls import path
from .views import TrainListView, StationListView, TrainDetailView

urlpatterns = [
    path('trains/', TrainListView.as_view(), name='train-list'),
    path('stations/', StationListView.as_view(), name='station-list'),
    path('trains/<str:number>/', TrainDetailView.as_view(), name='train-detail'),
]
