# backend/products/models.py
from django.db import models # Changed from djongo import models

class Product(models.Model):
    # Django automatically adds an 'id' AutoField as primary key
    # id = models.AutoField(primary_key=True) # This is implicit

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name