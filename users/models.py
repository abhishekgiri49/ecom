from django.utils.timezone import now
from django.db import models
from django.conf import settings

STATUS = (
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('blocked', 'Blocked'),
    )
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='user_profile', on_delete=models.CASCADE)
    address = models.CharField(max_length=140, blank=True, null=True)
    verification_code = models.SlugField(unique=True, editable=False, max_length=200)
    profile_picture = models.ImageField(upload_to='profile/', default="img/pf.jpg")
    phone = models.CharField(max_length=140, blank=True, null=True)
    status = models.CharField(max_length=1, choices=STATUS)
    notification_seen_date = models.DateTimeField(default=now, blank=True)
    def __str__(self):
        return self.user.username
