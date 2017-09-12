from django.test import TestCase
import datetime
from swot.models import Item, UpVote

ITEM_1_TEXT = 'strength item #1'

class ItemTestCase(TestCase):
	def setUp(self):
		self.item1 = Item.objects.create(
			boardtype='strength',
			text=ITEM_1_TEXT,
		)

	def test_item_has_created_field(self):
		'''
		date created is automatically created
		'''
		item1 = Item.objects.filter(text=ITEM_1_TEXT).first()
		self.assertIn('created', dir(item1))
		self.assertIsInstance(item1.created, datetime.datetime)

	def test_item_has_upvotes(self):
		item1 = Item.objects.filter(text=ITEM_1_TEXT).first()
		upvote = UpVote.objects.create(item=self.item1)
		self.assertIn(upvote, item1.upvote_set.all())
		self.assertEqual(upvote.id, item1.upvote_set.first().id)

	def test_item_has_multiple_upvotes(self):
		item1 = Item.objects.filter(text=ITEM_1_TEXT).first()
		upvotes = [item1.upvote_set.create() for x in range(5)]
		self.assertEqual(len(item1.upvote_set.all()), len(upvotes))
		self.assertEqual(set(item1.upvote_set.all()), set(upvotes))

	def test_upvote_has_one_item(self):
		item1 = Item.objects.filter(text=ITEM_1_TEXT).first()
		upvote = UpVote.objects.create(item=item1)
		self.assertEqual(upvote.item.id, item1.id)

