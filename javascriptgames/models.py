from django.db import models

# Create your models here.


class Game(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name


class Score(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    score = models.IntegerField()
    player_name = models.CharField(max_length=3)

    def __str__(self) -> str:
        return f"{self.game}, {self.player_name}, {self.score}"
