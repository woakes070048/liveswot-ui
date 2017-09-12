from rest_framework import serializers
from swot.models import Item, UpVote


class ItemSerializer(serializers.ModelSerializer):
	class Meta:
		model = Item
		fields = ('id', 'boardtype', 'text')

class UpVoteSerializer(serializers.ModelSerializer):
	class Meta:
		model = UpVote
		fields = ('id', 'item')