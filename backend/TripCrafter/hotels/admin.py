from django.contrib import admin
from .models import Hotel
# Register your models here.
from django.contrib import admin
from .models import Hotel, HotelImage ,Room

class HotelImageInline(admin.TabularInline):
    model = HotelImage
    extra = 4  # Number of extra image fields you want to show in the admin form

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    inlines = [HotelImageInline]

admin.site.register(HotelImage)

admin.site.register(Room)