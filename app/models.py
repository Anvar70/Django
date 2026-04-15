from django.db import models

# Create your models here.

class User(models.Model):
    ism = models.CharField(max_length=50, blank=False)
    familiya = models.CharField(max_length=50, blank=False)
    yosh = models.PositiveIntegerField(default=0, blank=True)

    def __str__(self):
        return f"{self.ism} {self.familiya}"
