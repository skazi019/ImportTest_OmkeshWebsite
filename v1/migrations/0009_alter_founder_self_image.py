# Generated by Django 4.1.6 on 2023-02-12 10:08

from django.db import migrations
import pictures.models


class Migration(migrations.Migration):
    dependencies = [
        ("v1", "0008_alter_founder_self_image_alter_gallery_fullimage"),
    ]

    operations = [
        migrations.AlterField(
            model_name="founder",
            name="self_image",
            field=pictures.models.PictureField(
                aspect_ratios=["4/5"],
                breakpoints={"l": 1200, "m": 992, "s": 768, "xl": 1400, "xs": 576},
                container_width=1200,
                file_types=["WEBP"],
                grid_columns=12,
                help_text="\n            Please convert your JPG/PNG/etc image to WEBP at cloudconvert.com or squoosh.app to ensure a smooth expreience for your users.\n\n            Also, please make sure the aspect ratio of the image is 4:5, similar to that of a Instagram post.\n        ",
                pixel_densities=[1, 2],
                upload_to="founder",
            ),
        ),
    ]
