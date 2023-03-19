from django.contrib import admin

from .models import Gallery, Principle, Founder, SEO, Partner, Contact


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


class SEOView(admin.ModelAdmin):
    list_display = ("title", "description")

    def has_add_permission(self, request):
        # if there's already an entry, do not allow adding
        count = SEO.objects.all().count()
        if count == 0:
            return True
        return False

class PartnerView(admin.ModelAdmin):
    list_display = ("order", "name")
    list_editable = ["order"]
    ordering = ["order"]
    list_display_links = ("name",)


class ContactView(admin.ModelAdmin):
    list_display = ("phone", "email", "address", "work_timings")

    def has_add_permission(self, request):
        # if there's already an entry, do not allow adding
        count = Contact.objects.all().count()
        if count == 0:
            return True
        return False

admin.site.register(Gallery, GalleryView)
admin.site.register(Principle, PrincipleView)
admin.site.register(Founder, FounderView)
admin.site.register(SEO, SEOView)
admin.site.register(Partner, PartnerView)
admin.site.register(Contact, ContactView)
