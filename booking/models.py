from django.db import models
from django.utils.translation import ugettext_lazy as _


class User(models.Model):
    email = models.EmailField(_("email address"))
    first_name = models.CharField(_("first name"), max_length=30)
    last_name = models.CharField(_("last name"), max_length=30)
    phone = models.CharField(_("phone number"), max_length=10)
    password = models.CharField(_("password"), max_length=14)
