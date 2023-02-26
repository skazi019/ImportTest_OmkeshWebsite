from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets

from .models import Founder, Principle, Gallery
from .serializers import GallerySerializer


# Create your views here.
@csrf_exempt
def index(request):
    return render(request=request, template_name="index.html")


class GetGalleryImages(viewsets.ModelViewSet):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()


def get_principles(request):
    if request.method == "GET":
        try:
            all_principles = list(Founder.objects.all().values())
            all_principles = Principle.objects.all()
            all_principles = serializers.serialize("json", all_principles)

            return JsonResponse(
                data={
                    "status": "SUCCESS",
                    "all_principles": all_principles,
                },
                status=200,
            )
        except Exception as e:
            return JsonResponse(
                data={"status": "ERROR", "message": str(e)},
                status=400,
            )
    else:
        return JsonResponse(
            data={"status": "ERROR", "message": "Request method not supported"},
            status=500,
        )


def get_founders(request):
    if request.method == "GET":
        try:
            all_founders = list(Founder.objects.all().values())
            # all_founders = Founder.objects.all()
            # all_founders = serializers.serialize("json", all_founders)

            return JsonResponse(
                data={
                    "status": "SUCCESS",
                    "all_founders": all_founders,
                },
                status=200,
            )
        except Exception as e:
            return JsonResponse(
                data={"status": "ERROR", "message": str(e)},
                status=400,
            )
    else:
        return JsonResponse(
            data={"status": "ERROR", "message": "Request method not supported"},
            status=500,
        )
