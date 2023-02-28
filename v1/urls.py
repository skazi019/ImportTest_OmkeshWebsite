from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import (
    index,
    get_gallery_images,
    get_principles,
    get_founders,
)

urlpatterns = [
    path(route="", view=index, name="home"),
    path(route="gallery", view=get_gallery_images, name="gallery"),
    path(route="principles", view=get_principles, name="principles"),
    path(route="founders", view=get_founders, name="founders"),
]
