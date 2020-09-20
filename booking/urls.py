from django.conf.urls import url
from . import views
from django.urls import path

app_name = "booking"

urlpatterns = [
    url(r"^$", views.IndexView.as_view(), name="index"),
    url(r"contact/$", views.contact, name="contact"),
    url(r"advance/$", views.advance, name="advance"),
]
