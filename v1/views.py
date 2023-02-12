from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers

from .models import Founder, Principle, Gallery


# Create your views here.
def index(request):
    return render(request=request, template_name="index.html")


def get_gallery_images(request):
    if request.method == "GET":
        try:
            all_gallery_images = list(Gallery.objects.all().values())
            # all_gallery_images = Gallery.objects.all()
            # all_gallery_images = serializers.serialize("json", all_gallery_images)

            return JsonResponse(
                data={
                    "status": "SUCCESS",
                    "all_gallery_images": all_gallery_images,
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
