from django.db import models
from constants import BOARD_TYPES

class Item(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	boardtype = models.CharField(choices=BOARD_TYPES, max_length=11)
	text = models.TextField()

	class Meta:
		ordering = ('created',)

class UpVote(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	item = models.ForeignKey(Item, on_delete=models.CASCADE)