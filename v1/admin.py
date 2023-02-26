from django.contrib import admin

from .models import Gallery, Principle, Founder


class GalleryView(admin.ModelAdmin):
    list_display = ("index", "description")
    list_editable = ["index"]
    ordering = ["index"]
    list_display_links = ("description",)


class PrincipleView(admin.ModelAdmin):
    list_display = ("order", "title", "description")
    list_editable = ["order"]
    ordering = ["order"]
    list_display_links = ("title",)


class FounderView(admin.ModelAdmin):
    list_display = ("order", "name")
    list_editable = ["order"]
    ordering = ["order"]
    list_display_links = ("name",)


admin.site.register(Gallery, GalleryView)
admin.site.register(Principle, PrincipleView)
admin.site.register(Founder, FounderView)
