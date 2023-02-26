from django.db import models


class Gallery(models.Model):
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


class Founder(models.Model):
    order = models.SmallIntegerField()
    name = models.CharField(blank=False, max_length=120)
    bio = models.CharField(blank=False, max_length=150)
    self_image = models.ImageField(
        upload_to="founder",
        blank=False,
        help_text="""
            Please convert your JPG/PNG/etc image to WEBP at cloudconvert.com or squoosh.app to ensure a smooth expreience for your users.\n
            Also, please make sure the aspect ratio of the image is 4:5, similar to that of a Instagram post.
        """,
    )

    @property
    def imageUrl(self):
        if self.self_image and hasattr(self.self_image, "url"):
            return self.self_image
