from django.db import models


# Create your models here.
class prime(models.Model):
    location = models.CharField(max_length=250)
    no_of_slot = models.CharField(max_length=20)

    def __str__(self):
        return self.location


class parking(models.Model):
    """docstring for parking"""

    park_loc = models.ForeignKey(prime, on_delete=models.CASCADE)
    # True: slot is vacant, False: slot is taken
    park_no = models.BooleanField(default=True)
    current_status = models.CharField(max_length=100)

    def __str__(self):
        return self.park_no
