# Generated by Django 4.1.7 on 2023-03-05 07:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("v1", "0010_alter_founder_self_image"),
    ]

    operations = [
        migrations.CreateModel(
            name="SEO",
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
                (
                    "title",
                    models.CharField(
                        default="Jay Shree Krishna Consultants", max_length=120
                    ),
                ),
                (
                    "description",
                    models.TextField(default="Professional structural engineers"),
                ),
                ("logo", models.ImageField(upload_to="seo")),
            ],
        ),
    ]
