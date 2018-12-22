export default class VCFinishingState
{
    constructor(viewControls)
    {
        this.viewControls = viewControls;
    }

    setup(values)
    {
        if (values.player == "1") {
            this.viewControls.userActionCtrl.value = "Empezar";
            this.viewControls.score.setScore(1, values.points);
            this.viewControls.score.setFinalScore(1, values.points);
        } else {
            this.viewControls.userActionCtrl.value = "Nuevo Juego";
            this.viewControls.userInputCtrl.value = "";
            this.viewControls.score.setScore(2, values.points);
            this.viewControls.score.setFinalScore(2, values.points);
        }

        this.viewControls.timeCtrl.innerHTML = values.tiempo;
        this.viewControls.userInputCtrl.disabled = true;
        this.viewControls.userSentenceCtrl.innerText = "";
        this.viewControls.userInputCtrl.value = "";

        return this.timerStart(values.player);
    }

    timerStart(player) {
        return new Promise((resolve) => {
            let counter = 4;
            this.viewControls.playerTurnName.innerText = "";
            this.viewControls.playerTurnTimer.innerHTML = `¡Buen trabajo Player ${player}!`;
            if (player === "1") {
                this.viewControls.playerTurnTimer.innerHTML += "<br>Ahora el turno del Player 2";
            }
            this.viewControls.playerTurn.classList.remove("off");
            let int = setInterval(() => {
                counter--;
                if (counter <= 0) {
                    clearInterval(int);
                    resolve(true);
                }
            }, 1000)
        });
    }

}
