from django.urls import path

from . import views

urlpatterns = [
    path("", views.product_list, name="store_home"),
    path("product/<str:slug>", views.product, name="store_home"),
]
