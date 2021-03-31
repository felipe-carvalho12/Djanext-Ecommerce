from django.shortcuts import render
from rest_framework.generics import ListAPIView

from .models import Category, Product
from .serializers import ProductSerializer


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
