from django.db import models

from pictures.models import PictureField


class Gallery(models.Model):
    order = models.SmallIntegerField(default=10)
    description = models.TextField(
        blank=False,
        help_text="This description would he displayed above the gallery image.",
        default="One or two statments describing the project in the image",
    )
    fullImage = PictureField(
        upload_to="gallery",
        blank=False,
        help_text="Please upload image size of atleast: 1920p x 1080px",
        aspect_ratios=["16/9"],
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


class Founder(models.Model):
    order = models.SmallIntegerField()
    name = models.CharField(blank=False, max_length=120)
    bio = models.CharField(blank=False, max_length=150)
    self_image = PictureField(
        upload_to="founder",
        blank=False,
        help_text="Please upload image size of atleast: 1920p x 1080px",
        aspect_ratios=["4/5"],
    )

    @property
    def imageUrl(self):
        if self.fullImage and hasattr(self.fullImage, "url"):
            return self.fullImage.url