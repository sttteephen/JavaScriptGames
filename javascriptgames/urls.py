from django.urls import path

from . import views

app_name = "games"
urlpatterns = [
    path("", views.home, name="home"),
    path("rps/", views.rps, name="rps"),
    path("memorygame/", views.memorygame, name="memorygame"),
    path("whacamole/", views.whacamole, name="whacamole"),
    path("breakout/", views.breakout, name="breakout"),
    path("newscore/<int:game_id>", views.newscore, name="newscore"),
]
