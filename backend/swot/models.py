from django.db import models
from constants import BOARD_TYPES

class SwotItem(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	boardtype = models.CharField(choices=BOARD_TYPES, max_length=11)
	text = models.TextField()
	voted = models.BooleanField(default=False)
	vote = models.PositiveIntegerField()

	class Meta:
		ordering = ('created',)