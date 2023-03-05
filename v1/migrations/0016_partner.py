# Generated by Django 4.1.7 on 2023-03-05 10:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("v1", "0015_alter_gallery_options"),
    ]

    operations = [
        migrations.CreateModel(
            name="Partner",
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
                ("order", models.SmallIntegerField(default=1)),
                (
                    "name",
                    models.CharField(help_text="Name of your client", max_length=120),
                ),
                (
                    "logo",
                    models.ImageField(
                        help_text="Logo of your client", upload_to="partners"
                    ),
                ),
            ],
        ),
    ]