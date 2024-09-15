from django.db import models
from django.conf import settings
from trains.models import Train

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    train = models.ForeignKey(Train, on_delete=models.CASCADE)
    date_of_travel = models.DateField()
    seat_number = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='Booked')  # E.g., Booked, Cancelled

    def __str__(self):
        return f"{self.user.username} - {self.train.name} - {self.date_of_travel}"
