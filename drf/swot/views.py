from rest_framework import generics
from rest_framework import mixins
from swot.models import Item, UpVote
from swot.serializers import ItemSerializer, UpVoteSerializer

class ItemList(mixins.ListModelMixin,
	                  mixins.CreateModelMixin,
	                  generics.GenericAPIView):
	"""
	Request types: GET, POST
	List all items, or create a new item.
	"""
	queryset = Item.objects.all()
	serializer_class = ItemSerializer

	def get(self, request, *args, **kwargs):
		return self.list(request, *args, **kwargs)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)

class ItemDetail(mixins.RetrieveModelMixin,
											mixins.UpdateModelMixin,
											mixins.DestroyModelMixin,
											generics.GenericAPIView):
	"""
	Request types: GET, PUT, DELETE
	Retrieve, update or delete an item.
	"""
	queryset = Item.objects.all()
	serializer_class = ItemSerializer

	def get(self, request, *args, **kwargs):
		return self.retrieve(request, *args, **kwargs)

	def put(self, request, *args, **kwargs):
		return self.update(request, *args, **kwargs)

	def delete(self, request, *args, **kwargs):
		return self.destroy(request, *args, **kwargs)

class UpVoteList(mixins.ListModelMixin,
									mixins.CreateModelMixin,
									generics.GenericAPIView):
	"""
	Request types: GET, POST
	List all upvotes, or create a new upvote for a specific item
	"""
	queryset = UpVote.objects.all()
	serializer_class = UpVoteSerializer

	def get(self, request, *args, **kwargs):
		return self.list(request, *args, **kwargs)

	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)