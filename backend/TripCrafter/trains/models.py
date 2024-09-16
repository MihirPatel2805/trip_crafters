from django.db import models

# Create your models here.
class Train(models.Model):
    trainName = models.CharField(max_length=100,default="Prayagraj Express")  # Name of the train (e.g., 'Prayagraj Express')
    trainNumber = models.CharField(max_length=255,unique=True) # Train number (e.g., '12418')
    source = models.CharField(max_length=100,default="Ahmedabad Junction")  # Source station as a string (e.g., 'Ahmedabad Junction')
    destination = models.CharField(max_length=100,default="Allahabad Junction")  # Destination station as a string (e.g., 'Allahabad Junction')
    departureTime = models.TimeField(default='00:00')  # Departure time (e.g., '17:20')
    arrivalTime = models.TimeField(default='00:00')  # Set a default time value for existing rows
    travelDuration = models.CharField(max_length=10,default="18h 55m")  # Travel duration as a string (e.g., '18h 55m')
    fare = models.DecimalField(max_digits=10, decimal_places=2,default=1000)  # Fare in currency
    availableSeats = models.IntegerField(default=120)  # Available seats
    trainType = models.CharField(max_length=50,default="Express")  # Type of the train (e.g., 'Express')
    daysOfOperation = models.JSONField(default=list)  # Days of operation (e.g., 'Mon, Thu, Sat')
    coaches=models.JSONField(default=list)

