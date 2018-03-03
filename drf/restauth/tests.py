# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status

client = Client()

# Create your tests here.
class TestTestCase(TestCase):
    fixtures = [ "users.json" ]

    def test_signup_should_return_200_status_if_correct_user(self):

        response = client.post(reverse('get_post_signup'), data={
            'username': 'available',
            'password': 'passw',
            'confirm_password': 'passw',
            'email': 'available@email.com',
        })

        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_signup_should_return_error_when_password_confirmation_notmatch(self):
        response = client.post(reverse('get_post_signup'), data={
            'username': 'available',
            'password': 'passwd',
            'confirm_password': 'notmatch',
            'email': 'available@email.com',
        })

        self.assertEqual(status.HTTP_400_BAD_REQUEST, response.status_code)

    def test_signup_should_return_error_when_existing_username(self):
        response = client.post(reverse('get_post_signup'), data={
            'username': 'ab',
            'password': 'passwd',
            'confirm_password': 'passwd',
            'email': 'available',
        })

        self.assertEqual(status.HTTP_400_BAD_REQUEST, response.status_code)
