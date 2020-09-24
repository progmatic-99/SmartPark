from django.conf.urls import url
from django.urls import path

from . import views

app_name = "booking"

urlpatterns = [
    url(r'^login/$', views.LoginView.as_view(), name='login'),
    path("", views.IndexView.as_view(), name="index"),
    path("contact/", views.contact, name="contact"),
    path("advance/", views.advance, name="advance"),
]
