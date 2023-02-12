from django.contrib import admin
from django.urls import path, include

from .views import index, get_founders, get_principles, get_gallery_images


urlpatterns = [
    path(route="", view=index, name="home"),
    path(route="founders", view=get_founders, name="founders"),
    path(route="principles", view=get_principles, name="principles"),
    path(route="gallery", view=get_gallery_images, name="gallery"),
]
