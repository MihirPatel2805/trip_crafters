from rest_framework import serializers
from .models import Train
class TrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Train
        fields = '__all__'
        extra_kwargs = {
            'trainNumber': {
                'required': True,
                'allow_null': False
            }
        }
    def validate_trainNumber(self, value):
        # Ensure trainNumber is not None or duplicate
        if value is None:
            raise serializers.ValidationError("Train number cannot be null.")
        return value