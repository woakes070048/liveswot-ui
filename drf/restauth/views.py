from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import generics, mixins, status
from restauth.serializers import UserSerializer, UserSignupValidationSerializer

class SignUpView(generics.GenericAPIView,
    mixins.CreateModelMixin):

    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):

        serialized_validation = UserSignupValidationSerializer(data=request.data)
        serialized_validation.is_valid(raise_exception=True)

        serialized = UserSerializer(data=request.data)
        serialized.is_valid()

        if serialized._errors:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)

        return Response({})
