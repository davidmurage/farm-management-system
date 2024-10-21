from django.db import models
from django.contrib.auth.models import User, AbstractUser


class User(AbstractUser):
    ROLE_CHOICES = (
        ('farmer', 'Farmer'),
        ('buyer', 'Buyer')
    )
    role = models.CharField(max_length=6, choices=ROLE_CHOICES)
    
    def  __str__(self):
        return self.username
    


class Farmer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    contact_details = models.CharField(max_length=255)
    farm_location = models.CharField(max_length=255)
    farm_size = models.FloatField()
    farm_type = models.CharField(max_length=255) #crop or Livestock
    
    def __str__(self):
        return self.name
    
class Crop(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    planting_date = models.DateField()
    expected_harvest_date = models.DateField()
    currrent_stage = models.CharField(max_length=255)
    yield_amount = models.FloatField()
    
    def __str__(self):
        return self.name
    
class Livestock(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    livestock_type = models.CharField(max_length=255)
    age = models.IntegerField()
    health_status = models.CharField(max_length=255)
    products = models.CharField(max_length=255)
    
    def __str__(self):
        return self.livestock_type
        
        
class Product(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255) # crop or livestock product
    price = models.FloatField()
    quantity_available = models.FloatField()
    image = models.ImageField(upload_to='products/')
    
    def __str__(self):
        return self.name
    
class Order(models.Model):
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)
    buyer = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"Order of {self.product.name} by {self.buyer.username}"
    