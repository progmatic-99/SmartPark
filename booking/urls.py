from . import views
from django.urls import path

app_name = "booking"

urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("contact/", views.contact, name="contact"),
    path("advance/", views.advance, name="advance"),
]
