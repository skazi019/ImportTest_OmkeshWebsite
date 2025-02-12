from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import Founder, Principle, Gallery, SEO, Partner, Contact
from .serializers import (
    GallerySerializer,
    PrincipleSerializer,
    FounderSerializer,
    SEOSerializer,
    PartnerSerializer,
    ContactSerializer
)


# Create your views here.
@csrf_exempt
def index(request):
    return render(request=request, template_name="index.html")


@api_view(["GET"])
def get_gallery_images(request):
    if request.method == "GET":
        try:
            all_images = Gallery.objects.all()
            all_images = sorted(all_images, key=lambda item: item.index)
            serializer = GallerySerializer(all_images, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def get_principles(request):
    if request.method == "GET":
        try:
            all_principles = Principle.objects.all()
            all_principles = sorted(all_principles, key=lambda item: item.order)
            all_principles[len(all_principles) - 1].border_bottom = True
            serializer = PrincipleSerializer(all_principles, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def get_founders(request):
    if request.method == "GET":
        try:
            all_founders = Founder.objects.all()
            all_founders  = sorted(all_founders , key=lambda item: item.order)
            serializer = FounderSerializer(all_founders, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def get_seo(request):
    if request.method == "GET":
        try:
            seo_data = SEO.objects.all()
            serializer = SEOSerializer(seo_data[0])
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def get_partner(request):
    if request.method == "GET":
        try:
            all_partners = Partner.objects.all()
            all_partners = sorted(all_partners, key=lambda item: item.order)
            serializer = PartnerSerializer(all_partners, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)


@api_view(["GET"])
def get_contact_details(request):
    if request.method == "GET":
        try:
            contact_details = Contact.objects.all()
            serializer = ContactSerializer(contact_details[0])
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)
