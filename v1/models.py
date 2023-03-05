from django.core.validators import MaxValueValidator
from django.db import models


class Gallery(models.Model):
    class Meta:
            verbose_name_plural = 'Gallery'

    index = models.SmallIntegerField(default=1)
    description = models.TextField(
        blank=False,
        help_text="This description would he displayed above the gallery image.",
        default="One or two statments describing the project in the image",
    )
    fullImage = models.ImageField(
        upload_to="gallery",
        blank=False,
        help_text="""
            Please convert your JPG/PNG/etc image to WEBP at cloudconvert.com or squoosh.app to ensure a smooth expreience for your users.\n
            Also, please make sure the image is of a minimum size of atleast 1920x1080px and 16:9 aspect ratio
        """,
    )

    @property
    def imageUrl(self):
        if self.fullImage and hasattr(self.fullImage, "url"):
            return self.fullImage.url

    def __str__(self) -> str:
        return f"{self.description}"


class Principle(models.Model):
    order = models.SmallIntegerField(default=3)
    title = models.CharField(
        max_length=120, blank=False, help_text="Title heading 10-25 words"
    )
    description = models.CharField(
        max_length=250,
        blank=False,
        help_text="This description would he displayed on the right/below the Principle title.",
    )
    border_bottom = models.BooleanField(
        default=False, help_text="Leave this field as it is", editable=False
    )


class Founder(models.Model):
    order = models.SmallIntegerField(default=1)
    name = models.CharField(blank=False, max_length=120)
    bio = models.CharField(blank=False, max_length=150)
    self_image = models.ImageField(
        upload_to="founder",
        blank=True,
        help_text="""
            Please convert your JPG/PNG/etc image to WEBP at cloudconvert.com or squoosh.app to ensure a smooth expreience for your users.\n
            Also, please make sure the aspect ratio of the image is 4:5, similar to that of a Instagram post.
        """,
    )

    @property
    def imageUrl(self):
        if self.self_image and hasattr(self.self_image, "url"):
            return self.self_image.url


class SEO(models.Model):
    class Meta:
            verbose_name = 'SEO'
            verbose_name_plural = 'SEO'

    title = models.CharField(
        blank=False, max_length=120, default="Jay Shree Krishna Consultants"
    )
    description = models.TextField(
        blank=False, default="Professional structural engineers"
    )
    logo = models.ImageField(upload_to="seo", blank=True)

    @property
    def logo_url(self):
        if self.logo and hasattr(self.logo, "url"):
            return self.logo.url
