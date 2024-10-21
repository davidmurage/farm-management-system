from django.urls import path
from . import views

urlpatterns = [
    path('register-user/', views.register_user, name="register-user"),
    path('login-user/', views.login_user, name="login-user"),
    path('crops/', views.get_crops, name="get-crops"),
    path('add-crop/', views.add_crop, name="add-crop"),
    path('update-crop/<int:pk>/', views.update_crop, name="update-crop"),
    path('delete-crop/<int:pk>/', views.delete_crop, name="delete-crop"),
    path('livestock/', views.get_livestock, name="get-livestock"),
    path('add-livestock/', views.add_livestock, name="add-livestock"),
    path('update-livestock/<int:pk>/', views.update_livestock, name="update-livestock"),
    path('delete-livestock/<int:pk>/', views.delete_livestock, name="delete-livestock"),
    path('products/', views.get_products, name="get-products"),
    path('add-product/', views.add_product, name="add-product"),
    path('update-product/<int:pk>/', views.update_product, name="update-product"),
    path('delete-product/<int:pk>/', views.delete_product, name="delete-product"),
    path('place-order/', views.place_order, name="place-order"),
    path('orders/', views.get_orders, name="get-orders"),
    path('update-order-status/<int:pk>/', views.update_order_status, name="update-order-status"),
    path('weather/<str:location>/', views.get_weather, name="get-weather"),
]
