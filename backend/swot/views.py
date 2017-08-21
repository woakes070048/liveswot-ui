from rest_framework import generics
from rest_framework import mixins
from swot.models import SwotItem
from swot.serializers import SwotItemSerializer

class SwotItemList(mixins.ListModelMixin,
	                  mixins.CreateModelMixin,
	                  generics.GenericAPIView):
	"""
	List all code snippets, or create a new snippet.
	"""
	queryset = SwotItem.objects.all()
	serializer_class = SwotItemSerializer

	def get(self, request, *args, **kwargs):
		return self.list(request, *args, **kwargs)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class SwotItemDetail(mixins.RetrieveModelMixin,
											mixins.UpdateModelMixin,
											mixins.DestroyModelMixin,
											generics.GenericAPIView):
	"""
	Retrieve, update or delete a code snippet.
	"""
	queryset = SwotItem.objects.all()
	serializer_class = SwotItemSerializer

	def get(self, request, *args, **kwargs):
		return self.retrieve(request, *args, **kwargs)

	def put(self, request, *args, **kwargs):
		return self.update(request, *args, **kwargs)

	def delete(self, request, *args, **kwargs):
		return self.destroy(request, *args, **kwargs)