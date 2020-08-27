from django.db import models
from django.conf import settings
from django.utils import timezone
from django.urls import reverse
from django.template.defaultfilters import slugify
from ckeditor_uploader.fields import RichTextUploadingField
from multiselectfield import MultiSelectField
from core.models import *

CONDITION = (
        ('brand-new', 'Brand New'),
        ('like-new', 'Like New'),
        ('excellent', 'Excellent'),
        ('fair','Fair'),
        ('not-working','Not Working')
    )
TRANSMISSION = (
        ('manual-2d', 'Manual 2D'),
        ('manual-4d', 'Manual 4D'),
        ('auto-2d', 'Auto 2D'),
        ('auto-4d','Auto 4D'),
    )
WARRANTY = (
        ('dealer', 'Dealer/shop'),
        ('importer', 'Manufacturer/Importer'),
        ('none', 'No warranty'),
    )

FEATURE = (
        ('NULL', 'none'),
    )

def featureFunction():
    ins = FeatureValue.objects.all()
    data = []
    for ins_list in ins:
        data.append(ins_list.name)

    return data

class Product(models.Model):
    product_name = models.CharField(max_length=120)
    product_description = models.TextField()
    product_code = models.SlugField(unique=True, editable=False, max_length=200)
    seller = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1, verbose_name="Category")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    price_negotiable = models.BooleanField(default=True)
    condition = models.CharField(max_length=50, choices=CONDITION)
    days_to_run = models.IntegerField()
    feature=MultiSelectField(choices=FEATURE, default=False)

    # allow_variants = models.BooleanField(default=True)
    # product_attributes = models.ManyToManyField("attribute")
    image = models.ImageField(upload_to='products')
    anchal = models.CharField(max_length=100)
    lot_no = models.IntegerField()
    engine = models.CharField(max_length=100)
    make_year = models.IntegerField()
    mileage = models.IntegerField()
    Kilometers = models.IntegerField()
    transmission = models.CharField(max_length=50, choices=TRANSMISSION)
    views = models.IntegerField()
    home_delivery = models.BooleanField(default=True)
    delivery_charge = models.IntegerField()
    delivery_area = models.CharField(max_length=100)
    warranty_type = models.CharField(max_length=50, choices=WARRANTY)
    warranty_period = models.CharField(max_length=100)
    def __str__(self) :
        return self.product_name

    class Meta :
        ordering = ("product_name",)

# class Attribute(models.Model) :
#     name = models.CharField(max_length=120)

#     def __str__(self) :
#         return self.name

#     def get_all_attr_variants(self) :
#         variants = AttributeVariant.objects.filter(attribute__name=self.name)
#         return variants

# class AttributeVariant(models.Model) :
#     name = models.CharField(max_length=120)
#     attribute = models.ForeignKey(Attribute, on_delete=models.CASCADE)

#     def __str__(self) :
#         return self.name

#     class Meta :
#         ordering = ('name',)

# class ProductAttributeValue(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     attribute = models.ForeignKey(AttributeVariant, on_delete=models.CASCADE)

#     value = models.CharField(max_length=120)  
#     def __str__(self) :
#         return self.value

class FeatureValue(models.Model):
    name = models.CharField(max_length=120)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=False, verbose_name="Category")
    def __str__(self) :
        return self.name