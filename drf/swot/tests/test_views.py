import json
from swot.serializers import ItemSerializer
from swot.models import Item
from django.test import TestCase, Client
from rest_framework import status
from django.urls import reverse

client = Client()

class SimpleItemTestCase(TestCase):
	def setUp(self):
		self.valid_strength = {
			'boardtype': 'strength',
			'text': 'Strength item #1',
		}
		self.valid_strength2 = {
			'boardtype': 'strength',
			'text': 'Strength item #2',
		}
		self.valid_weakness = {
			'boardtype': 'weakness',
			'text': 'Weakness item #1',
		}
		self.invalid_item_wrong_boardtype = {
			'boardtype': 'something',
			'text': 'Invalid item #1',
		}
		self.invalid_item2_empty_text = {
			'boardtype': 'strength',
			'text': '',
		}

	def test_get_all_items(self):
		Item.objects.create(boardtype='strength', text='Strength item #1')
		response = client.get(reverse('get_post_item'), kwargs={})
		items = Item.objects.all()
		serializer = ItemSerializer(items, many=True)

		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(len(response.data), 1)
		self.assertEqual(response.data, serializer.data)

	def test_get_all_items_zero(self):
		response = client.get(reverse('get_post_item'), kwargs={})
		items = Item.objects.all()
		serializer = ItemSerializer(items, many=True)

		self.assertEqual(response.status_code, status.HTTP_200_OK)
		self.assertEqual(len(response.data), 0)
		self.assertEqual(response.data, serializer.data)

	def test_create_a_valid_strength_item(self):
		response = client.post(
			reverse('get_post_item'),
			data=json.dumps(self.valid_strength),
			content_type='application/json',
		)
		self.assertEqual(response.status_code, status.HTTP_201_CREATED)

	def test_create_a_valid_weakness_item(self):
		response = client.post(
			reverse('get_post_item'),
			data=json.dumps(self.valid_weakness),
			content_type='application/json',
		)
		self.assertEqual(response.status_code, status.HTTP_201_CREATED)

	def test_create_an_invalid_item_wrong_boardtype(self):
		response = client.post(
			reverse('get_post_item'),
			data=json.dumps(self.invalid_item_wrong_boardtype),
			content_type='application/json',
		)
		self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

	def test_create_an_invalid_strength_empty_text(self):
		response = client.post(
			reverse('get_post_item'),
			data=json.dumps(self.invalid_item2_empty_text),
			content_type='application/json',
		)
		self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

# class SimpleUpVoteTestCase(TestCase):
# 	def setUp(self):
# 		