# backend/products/views.py
from rest_framework import generics
# from bson import ObjectId # No longer needed
# from django.http import Http404 # Still useful

from .models import Product
from .serializers import ProductSerializer

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveAPIView): # Can be RetrieveUpdateDestroyAPIView for full CRUD
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'pk' # 'pk' is the default and refers to the primary key (id)
                        # You could also use 'id' if you prefer to be explicit in URLs