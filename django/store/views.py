from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Category, Product
from .serializers import ProductSerializer


@api_view(['GET'])
def product_list(request):
    serializer = ProductSerializer(Product.objects.filter(is_active=True), many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product(request, slug):
    serializer = ProductSerializer(Product.objects.get(slug=slug))
    return Response(serializer.data)
