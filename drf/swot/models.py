from django.db import models
from constants import CARD_TYPES, VOTE_TYPES

class SwotItem(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	cardType = models.CharField(choices=CARD_TYPES, max_length=11)
	text = models.TextField()

	class Meta:
		ordering = ('created',)

class Vote(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	voteType = models.CharField(choices=VOTE_TYPES, max_length=4)
	item = models.ForeignKey(SwotItem, on_delete=models.CASCADE)
