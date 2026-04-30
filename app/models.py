from django.db import models
from django.utils.text import slugify
import uuid
# Create your models here.

class User(models.Model):
    ism = models.CharField(max_length=80, blank=False)
    familiya = models.CharField(max_length=30, blank=False)
    yosh = models.PositiveIntegerField(default=0, blank=True)
    picture = models.ImageField(upload_to='images/', default='images/default.jpg', blank=True)
    email = models.EmailField(blank=True)
    phonenumber = models.CharField(max_length=20, blank=True)
    slug = models.SlugField(blank=True, unique=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f"{self.ism}-{self.familiya}-{str(uuid.uuid4())[:4]}")
        super().save(*args, **kwargs)
   
    def __str__(self):
        return f"{self.ism} {self.familiya}"
