from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import (
    index,
    get_founders,
    get_principles,
    GetGalleryImages,
)

router = routers.DefaultRouter()

router.register(prefix=r"gallery", viewset=GetGalleryImages)

urlpatterns = [
    path(route="", view=index, name="home"),
    path(route="founders/", view=get_founders, name="founders"),
    path(route="principles/", view=get_principles, name="principles"),
    path("", include(router.urls)),
]
