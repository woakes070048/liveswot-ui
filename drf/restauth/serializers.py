from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = (
            'username',
            'first_name',
            'last_name',
            'password',
        )

class UserSignupValidationSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    confirm_password = serializers.CharField(required=True)

    def validate(self, data):
        if not data.get('username'):
            raise serializers.ValidationError("Please enter username")
        if not data.get('email'):
            raise serializers.ValidationError("Please enter email")
        if not data.get('password'):
            raise serializers.ValidationError("Please enter password")
        if not data.get('confirm_password'):
            raise serializers.ValidationError("Please confirm password")
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError("Password not match")

        return data
