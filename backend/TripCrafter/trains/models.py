from django.db import models
import uuid

class Station(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    city = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.code})"


class Train(models.Model):
    id = models.CharField(max_length=36, primary_key=True, default=uuid.uuid4, editable=False)  # String-based ID
    trainName = models.CharField(max_length=100)  # Name of the train (e.g., 'Prayagraj Express')
    trainNumber = models.CharField(max_length=10, unique=True)  # Train number (e.g., '12418')
    source = models.CharField(max_length=100)  # Source station as a string (e.g., 'Ahmedabad Junction')
    destination = models.CharField(max_length=100)  # Destination station as a string (e.g., 'Allahabad Junction')
    departureTime = models.TimeField()  # Departure time (e.g., '17:20')
    arrivalTime = models.TimeField(default='00:00')  # Set a default time value for existing rows
    travelDuration = models.CharField(max_length=10)  # Travel duration as a string (e.g., '18h 55m')
    fare = models.DecimalField(max_digits=10, decimal_places=2)  # Fare in currency
    availableSeats = models.IntegerField()  # Available seats
    trainType = models.CharField(max_length=50)  # Type of the train (e.g., 'Express')
    daysOfOperation = models.CharField(max_length=50)  # Days of operation (e.g., 'Mon, Thu, Sat')

    def __str__(self):
        return f"{self.trainName} ({self.trainNumber})"


class Coach(models.Model):
    id = models.CharField(max_length=36, primary_key=True, default=uuid.uuid4, editable=False)  # String-based ID
    train = models.ForeignKey(Train, related_name='coaches', on_delete=models.CASCADE)  # Train to which the coach belongs
    coachType = models.CharField(max_length=2)  # Type of coach (e.g., 'SL', '3A', '2A')
    numberOfSeats = models.IntegerField()  # Number of seats in the coach

    def __str__(self):
        return f"{self.coachType} - {self.numberOfSeats} seats"



class Route(models.Model):
    train = models.ForeignKey(Train, related_name='routes', on_delete=models.CASCADE)
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    arrival_time = models.TimeField()
    departure_time = models.TimeField()

    def __str__(self):
        return f"{self.train.name} - {self.station.name}"
