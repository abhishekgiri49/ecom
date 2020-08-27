from django.contrib import admin
from .models import *
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget

class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title','status']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title','slug']

class BrandAdmin(admin.ModelAdmin):
    list_display = ['name','status']

class GalleryAdmin(admin.ModelAdmin):
    list_display = ['name','category','gallerytype','status']

class ContactAdmin(admin.ModelAdmin):
    list_display = ['name','phone','email','subject','status']

class CmsAdmin(admin.ModelAdmin):
    list_display = ['title','slug','type','short_desc','status']

admin.site.register(Banner)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Team)
admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(ContactUs)
admin.site.register(FAQ)
admin.site.register(PrivacyAndPolicy)
admin.site.register(Brand, BrandAdmin)
admin.site.register(Cms, CmsAdmin)