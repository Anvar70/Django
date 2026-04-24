from django.db import models

# Create your models here.

class User(models.Model):
    ism = models.CharField(max_length=80, blank=False)
    familiya = models.CharField(max_length=30, blank=False)
    yosh = models.PositiveIntegerField(default=0, blank=True)
    picture = models.ImageField(upload_to='images/', default='images/default.jpg', blank=True)
    
    def __str__(self):
        return f"{self.ism} {self.familiya}"
