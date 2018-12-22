export default class VCPlayingState
{
    constructor(viewControls)
    {
        this.viewControls = viewControls;
    }

    setup(values = {})
    {
        this.viewControls.userActionCtrl.value = "Terminar";
        this.viewControls.userInputCtrl.disabled = false;
        this.viewControls.userInputCtrl.value = "";

        this.resetTexts();

        this.viewControls.playerTurn.classList.remove("off");
        this.viewControls.playerTurnName.innerText = `Player ${values.player}`;

        return this.timerStart();
    }

    resetTexts()
    {
        this.viewControls.playerTurnTimer.innerText = "";
        this.viewControls.playerTurnName.innerText = "";
        this.viewControls.userSentenceCtrl.innerText = "";
    }

    timerStart() {
        return new Promise((resolve) => {
            let counter = 4;
            let int = setInterval(() => {
                counter--;
                if (counter <= 0) {
                    clearInterval(int);
                    resolve(true);
                }
                this.viewControls.playerTurnTimer.innerText = `Comienza en: ${counter}`;
            }, 1000)
        });
    }

}
