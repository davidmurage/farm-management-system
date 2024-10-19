from django.test import TestCase
from .models import Farmer

# Create your tests here.


class FarmerModelTest(TestCase):
    def setUp(self):
        Farmer.objects.create(name="John Doe", farm_location="Kenya")

    def test_farm_location(self):
        farmer = Farmer.objects.get(name="John Doe")
        self.assertEqual(farmer.farm_location, "Kenya")
