from django.contrib import admin
from .models import *
# Register your models here.
class BlogAdmin(admin.ModelAdmin):
    list_display=['id',"title","author",'content','created_at']
    ordering=['id']
admin.site.register(Blog,BlogAdmin)
