from django.contrib import admin
from .models import Hotel, Room, HotelImage
# Define the Room Inline (to handle room within Hotel admin)
class RoomInline(admin.TabularInline):
    model = Room
    extra = 3  # Number of empty forms to show by default

# Define the Hotel Image Inline (to handle images within Hotel admin)
class HotelImageInline(admin.TabularInline):
    model = HotelImage
    extra = 4  # Number of empty forms to show by default

# Customize the Hotel admin view
class HotelAdmin(admin.ModelAdmin):
    inlines = [RoomInline, HotelImageInline]  # Add Room and Image inline models

# Register the Hotel model
admin.site.register(Hotel, HotelAdmin)


