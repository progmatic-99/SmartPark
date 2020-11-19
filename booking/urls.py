from django.urls import include, path
from rest_framework import routers
from .views import UserView


router = routers.DefaultRouter()
router.register(r"user", UserView, "users")

urlpatterns = [
    path("", include(router.urls)),
]
