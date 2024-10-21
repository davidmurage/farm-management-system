from rest_framework import serializers
from .models import User, Farmer, Crop, Livestock, Product, Order
from django import forms


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only= True)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role']
        
    def create(self, validate_data):
        user = User.objects.create_user(
            username=validate_data['username'],
            email = validate_data['email'],
            password = validate_data['password'],
            role = validate_data['role']
        )
        return user    

#class UserLoginForm(forms.Form):
    #username = forms.CharField()
    #password = forms.CharField(widget=forms.PasswordInput)
    
class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = '__all__'

class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = '__all__'

class LivestockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livestock
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
