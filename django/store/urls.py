from django.urls import path

from . import views

urlpatterns = [
    path("api/", views.ProductListView.as_view(), name="store_home"),
]
