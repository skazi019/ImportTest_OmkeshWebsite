# Generated by Django 4.1.6 on 2023-02-12 05:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("v1", "0002_remove_gallery_name_remove_gallery_priority_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Principle",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("order", models.SmallIntegerField(default=3)),
                (
                    "title",
                    models.CharField(
                        help_text="Title heading 10-25 words", max_length=120
                    ),
                ),
                (
                    "description",
                    models.CharField(
                        help_text="This description would he displayed on the right/below the Principle title.",
                        max_length=250,
                    ),
                ),
            ],
        ),
    ]