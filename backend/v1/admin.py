from django.contrib import admin

from .models import Gallery, Principle


class GalleryView(admin.ModelAdmin):
    list_display = ("order", "description")
    list_editable = ["order"]
    ordering = ["order"]
    list_display_links = ("description",)

class PrincipleView(admin.ModelAdmin):
    list_display = ("order", "title", "description")
    list_editable = ["order"]
    ordering = ["order"]
    list_display_links = ("title",)


admin.site.register(Gallery, GalleryView)
admin.site.register(Principle, PrincipleView)
