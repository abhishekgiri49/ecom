from django.db import models
from django.conf import settings
from django.utils import timezone
from django.urls import reverse
from django.template.defaultfilters import slugify
from ckeditor_uploader.fields import RichTextUploadingField


class Banner(models.Model):
    STATUS = (
        ('Y', 'Yes'),
        ('N', 'No'),
    )
    name = models.CharField(max_length=30)
    short_desc = models.CharField(max_length=500)
    image = models.ImageField(upload_to='banners/')
    link =models.CharField(null=True, max_length=200)
    status = models.CharField(max_length=1, choices=STATUS)

    def __str__(self):
        return self.name


class Category(models.Model):
    slug = models.SlugField(max_length=100, unique=True, null=True)
    title = models.CharField(max_length=250)
    parent = models.ForeignKey('self', blank=True, on_delete=models.CASCADE, null=True, related_name='child')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created at")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated at")

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['title']
    
    def __str__(self):
        return self.title
        
    def __unicode__(self):
        p_list = self._recurse_for_parents(self)
        p_list.append(self.title)
        return self.get_separator().join(p_list)
    
    def _recurse_for_parents(self, cat_obj):
        p_list = []
        if cat_obj.parent_id:
            p = cat_obj.parent
            p_list.append(p.title)
            more = self._recurse_for_parents(p)
            p_list.extend(more)
        if cat_obj == self and p_list:
            p_list.reverse()
        return p_list
    
    def get_separator(self):
        return ' :: '
    
    def _parents_repr(self):
        p_list = self._recurse_for_parents(self)
        return self.get_separator().join(p_list)
    _parents_repr.short_description = 'Category parents'
    
    def save(self):
        p_list = self._recurse_for_parents(self)
        if self.title in p_list:
            raise validators.ValidationError('You must not save a category in itself')
        super(Category, self).save()
    
    def get_absolute_url(self):
        return reverse(
            'category_index', 
            args=[self.slug])  

# class Blog(models.Model):
#     TYPE = (
#         ('blog', 'Blog'),
#         ('news', 'News'),
#     )
#     author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     title = models.CharField(max_length=200)
#     views = models.IntegerField()
#     slug = models.SlugField(null=True, editable=False, max_length=200)
#     category = models.ForeignKey(Category, on_delete=models.CASCADE, default=False, verbose_name="Category")
#     type = models.CharField(default='blog', max_length=10, choices=TYPE)
#     short_desc = models.CharField(max_length=200)
#     content = RichTextUploadingField()
#     image = models.ImageField(upload_to='blogs/')
#     is_published = models.BooleanField(default=False, verbose_name="Is published?")
#     display = models.BooleanField(default=False, verbose_name="display in home?")
#     created_date = models.DateTimeField(default=timezone.now)
#     published_date = models.DateTimeField(blank=True, null=True)
    

#     def save(self, *args, **kwargs):
#         value = self.title
#         self.is_published = True
#         self.published_date = timezone.now()
#         self.slug = slugify(value)
#         super().save(*args, **kwargs)  

#     def __str__(self):
#         return self.title

class Team(models.Model):
    STATUS = (
        ('Y', 'Yes'),
        ('N', 'No'),
    )
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blogs/')
    position = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(max_length=1, choices=STATUS)

    def __str__(self):
        return self.name

class Service(models.Model):
    STATUS = (
        ('Y', 'Yes'),
        ('N', 'No'),
    )
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField(upload_to='services/')
    status = models.CharField(max_length=1, choices=STATUS)

    def __str__(self):
        return self.title

class Gallery(models.Model):
    STATUS = (
        ('Y', 'Yes'),
        ('N', 'No'),
    )
    TYPE = (
        ('image', 'Image'),
        ('video', 'Video'),
    )
    name = models.CharField(max_length=30)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=False, verbose_name="Category")
    galleryfile= models.FileField(upload_to='gallery/', null=True, verbose_name="")
    gallerytype = models.CharField(max_length=10, null=True, choices=TYPE)
    status = models.CharField(max_length=1, choices=STATUS)
    class Meta:
        verbose_name = "Gallery"
        verbose_name_plural = "Galleries"
        ordering = ['name']

    def __str__(self):
        return self.name

class Contact(models.Model):
    STATUS = (
        ('pending', 'Pending'),
        ('contacted', 'Contacted'),
        ('closed','Closed'),
    )
    name = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    subject = models.CharField(max_length=150)
    message = models.TextField()
    comment = models.CharField(max_length=200, default=None, blank=True, null=True)
    status = models.CharField(max_length=10, choices=STATUS)
    follow_date = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        return self.name


class ContactUs(models.Model):
    address    = models.CharField(max_length=100)
    email   = models.EmailField()
    phone = models.CharField(max_length=250)
    open_time = models.TextField()

    class Meta:
        verbose_name_plural = "Contact Us"

    def __str__(self):
        return self.address

class PrivacyAndPolicy(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Privacy And Policy"


class FAQ(models.Model):
    question = models.CharField(max_length=300)
    answer = models.TextField()

    def __str__(self):
        return self.question

    class Meta:
        verbose_name_plural = "FAQs"

class Brand(models.Model):
    STATUS = (
        ('Y', 'Yes'),
        ('N', 'No'),
    )
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='brand-icons/')
    status = models.CharField(max_length=1, choices=STATUS)

    def __str__(self):
        return self.name

class Cms(models.Model):
    STATUS = (
        ('Y', 'Yes'),
        ('N', 'No'),
    )
    TYPE = (
        ('system', 'System'),
        ('website', 'Website'),
    )
    title = models.CharField(max_length=100)
    slug = models.CharField(max_length=100)
    short_desc = models.CharField(max_length=500)
    content = RichTextUploadingField()
    image = models.ImageField(upload_to='cms/')
    meta_key = models.CharField(max_length=500)
    meta_description = models.CharField(max_length=500)
    type = models.CharField(max_length=10, choices=TYPE)
    status = models.CharField(max_length=1, choices=STATUS)
    class Meta:
        verbose_name = "cms"
        verbose_name_plural = "Cms"
        ordering = ['title']

    def __str__(self):
        return self.title