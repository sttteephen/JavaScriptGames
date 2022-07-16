from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from .models import Score, Game


def home(request):
    scores = Score.objects.all().order_by("-score")
    return render(request, "javascriptgames/index.html", {"scores": scores})


def rps(request):
    return render(request, "javascriptgames/rps.html", {})


def memorygame(request):
    scores = Score.objects.filter(game=2).order_by("score")[:5]
    return render(request, "javascriptgames/memorygame.html", {"scores": scores})


def whacamole(request):
    scores = Score.objects.filter(game=3).order_by("-score")[:5]
    return render(request, "javascriptgames/whacamole.html", {"scores": scores})


def breakout(request):
    scores = Score.objects.filter(game=4).order_by("-score")[:5]
    return render(request, "javascriptgames/breakout.html", {"scores": scores})


def newscore(request, game_id):
    print(request.POST)
    print(game_id)
    new_score = Score(
        game=Game.objects.get(pk=game_id),
        score=request.POST["score"],
        player_name=request.POST["username"],
    )
    new_score.save()

    games = {2: "games:memorygame", 3: "games:whacamole"}
    return HttpResponseRedirect(reverse(games[game_id]))
