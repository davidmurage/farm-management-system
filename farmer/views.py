from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Farmer, Crop, Livestock, Product, Order
from .serializers import RegisterSerializer, FarmerSerializer, CropSerializer, LivestockSerializer, ProductSerializer, OrderSerializer
import requests
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
import stripe
from django.conf import settings

# --------Farmer views -------------

#Farmer Registration
@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        return Response({
          'refresh': str(refresh),
          'access':str(refresh.access_token),
          'user': serializer.data
    })
    return Response(serializer.errors, status=400)
    
#Farmer Login
@api_view(['POST'])
def login_user(request):
    data = request.data
    user = authenticate(email=data['email'], password=data['password'])
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access':str(refresh.access_token),
            'role': user.role
        })
        
    else:
        return Response({'error': 'Invalid credentials'}, status=400)
 
 
# ----------Crop View--------------
#create a crop
@api_view(['POST'])
def add_crop(request):
    farmer = request.user.farmer #ensures that farmer is authenticated   
    data = request.data
    crop = Crop.objects.create(
        farmer= farmer,
        name=data['name'],
        planting_date= data['planting_date'],
        expected_harvest_date = data['harvest_date'],
        current_stage=data['current_stage'],
        yield_amount = data.get('yield_amount', 0) #default to 0
        
    )
    return Response(CropSerializer(crop).data)

#get all crops
@api_view(['GET'])
def get_crops(request):
    farmer = request.user.farmer 
    crops = Crop.objects.filter(farmer=farmer)
    return Response(CropSerializer(crops, many=True).data)

#update crop
@api_view(['PUT'])
def update_crop(request, pk):
    farmer = request.user.farmer
    crop = Crop.objects.get(id=pk, farmer=farmer)
    crop.name = request.data['name']
    crop.planting_date = request.data['planting_date']
    crop.expected_harvest_date = request.data['expected_harvest_date']
    crop.current_stage = request.data['current_stage']
    crop.yield_amount = request.data.get('yield_amount', crop.yield_amount)
    crop.save()
    return Response(CropSerializer(crop).data)

#delete the crop
@api_view(['DELETE'])
def delete_crop(request, pk):
    farmer = request.user.farmer
    crop = Crop.objects.get(id=pk, farmer=farmer)
    crop.delete()
    return Response({'message': 'Crop deleted successfully'})

#-------------Livestock view-------------
# Add new livestock
@api_view(['POST'])
def add_livestock(request):
    farmer = request.user.farmer
    data = request.data
    livestock = Livestock.objects.create(
        farmer=farmer,
        livestock_type=data['livestock_type'],
        age=data['age'],
        health_status=data['health_status'],
        products=data['products']
    )
    return Response(LivestockSerializer(livestock).data)

# Get list of livestock
@api_view(['GET'])
def get_livestock(request):
    farmer = request.user.farmer
    livestock = Livestock.objects.filter(farmer=farmer)
    return Response(LivestockSerializer(livestock, many=True).data)

# Update livestock details
@api_view(['PUT'])
def update_livestock(request, pk):
    farmer = request.user.farmer
    livestock = Livestock.objects.get(id=pk, farmer=farmer)
    livestock.livestock_type = request.data['livestock_type']
    livestock.age = request.data['age']
    livestock.health_status = request.data['health_status']
    livestock.products = request.data['products']
    livestock.save()
    return Response(LivestockSerializer(livestock).data)

# Delete livestock
@api_view(['DELETE'])
def delete_livestock(request, pk):
    farmer = request.user.farmer
    livestock = Livestock.objects.get(id=pk, farmer=farmer)
    livestock.delete()
    return Response({"message": "Livestock deleted successfully"})

#-------------Product and sales View--------------
# Add new product for sale
@api_view(['POST'])
def add_product(request):
    farmer = request.user.farmer
    data = request.data
    product = Product.objects.create(
        farmer=farmer,
        name=data['name'],
        category=data['category'],
        price=data['price'],
        quantity_available=data['quantity_available'],
        image=data['image']
    )
    return Response(ProductSerializer(product).data)

# Get all products for the authenticated farmer
@api_view(['GET'])
def get_products(request):
    farmer = request.user.farmer
    products = Product.objects.filter(farmer=farmer)
    return Response(ProductSerializer(products, many=True).data)

# Update product
@api_view(['PUT'])
def update_product(request, pk):
    farmer = request.user.farmer
    product = Product.objects.get(id=pk, farmer=farmer)
    product.name = request.data['name']
    product.price = request.data['price']
    product.quantity_available = request.data['quantity_available']
    product.image = request.data['image']
    product.save()
    return Response(ProductSerializer(product).data)

# Delete product
@api_view(['DELETE'])
def delete_product(request, pk):
    farmer = request.user.farmer
    product = Product.objects.get(id=pk, farmer=farmer)
    product.delete()
    return Response({"message": "Product deleted successfully"})

#-----------Order View-----------
@api_view(['POST'])
def place_order(request):
    data = request.data
    product = Product.objects.get(id= data['product_id'])
    order = Order.objects.create(
        farmer = product.farmer,
        buyer = request.user,
        product = product,
        quantity = data['quantity'],
        status = 'Pending'
    )
    return Response(OrderSerializer(order).data)

#update order status
@api_view(['PUT'])
def update_order_status(request, pk):
    farmer = request.user.farmer
    order = Order.objects.get(id=pk, farmer=farmer)
    order.status = request.data['status']
    order.save()
    return Response(OrderSerializer(order).data)

#-----weather view--------
@api_view(['GET'])
def get_weather(request, location):
    api_key = 'YOUR_API_KEY'
    url = f"http://api.weatherapi.com/v1/current.json?key={api_key}&q={location}"
    response = requests.get(url)
    return Response(response.json())



stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(['POST'])
def create_payment_intent(request):
    data = request.data
    amount = int(data['amount'])  # Convert amount to cents
    intent = stripe.PaymentIntent.create(
        amount=amount,
        currency='usd',
        payment_method_types=['card'],
    )
    return Response({'client_secret': intent['client_secret']})