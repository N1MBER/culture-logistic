from rest_framework.fields import CharField
from rest_framework.serializers import ModelSerializer
from rest_framework_simplejwt.serializers import PasswordField

from users.models import User


class UserSerializer(ModelSerializer):
    password = CharField(write_only=True, allow_blank=False, min_length=6)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    class Meta:
        model = User
        fields = ('email', 'password')
