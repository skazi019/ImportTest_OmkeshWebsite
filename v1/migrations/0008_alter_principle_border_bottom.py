# Generated by Django 4.1.7 on 2023-02-27 13:08

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("v1", "0007_alter_founder_order"),
    ]

    operations = [
        migrations.AlterField(
            model_name="principle",
            name="border_bottom",
            field=models.BooleanField(
                default=False, help_text="Leave this field as it is"
            ),
        ),
    ]
