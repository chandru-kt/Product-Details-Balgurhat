# backend/products/urls.py
from django.urls import path
from .views import ProductListCreateView, ProductDetailView

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    # If lookup_field is 'pk', Django expects an integer by default for <int:pk>
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]