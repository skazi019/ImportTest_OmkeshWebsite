from rest_framework import serializers
from .models import Gallery, Principle, Founder, SEO


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ("index", "description", "imageUrl")


class PrincipleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Principle
        fields = ("order", "title", "description", "border_bottom")


class FounderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Founder
        fields = ("order", "name", "bio", "imageUrl")


class SEOSerializer(serializers.ModelSerializer):
    class Meta:
        model = SEO
        fields = ("title", "description", "logo_url")
