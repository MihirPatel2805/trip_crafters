from django.db import models

class Station(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    city = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.code})"

class Train(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=10, unique=True)
    start_station = models.ForeignKey(Station, related_name='start_trains', on_delete=models.CASCADE)
    end_station = models.ForeignKey(Station, related_name='end_trains', on_delete=models.CASCADE)
    days_of_operation = models.CharField(max_length=50)  # E.g., 'Mon, Wed, Fri'

    def __str__(self):
        return f"{self.name} ({self.number})"

class Route(models.Model):
    train = models.ForeignKey(Train, related_name='routes', on_delete=models.CASCADE)
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    arrival_time = models.TimeField()
    departure_time = models.TimeField()

    def __str__(self):
        return f"{self.train.name} - {self.station.name}"
