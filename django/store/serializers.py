from rest_framework import serializers

from .models import ProductImage, Product


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image']


class ProductSerializer(serializers.ModelSerializer):
    featureImages = ProductImageSerializer(many=True)

    class Meta:
        model = Product
        fields = ["id", "slug", "title", "description", "featureImages", "regular_price"]
