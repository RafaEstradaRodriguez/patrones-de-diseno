export default class VCBreakdownState
{
    constructor(viewControls)
    {
        this.viewControls = viewControls;
    }

    setup(values = {})
    {
        this.viewControls.timeCtrl.innerHTML = 0;
        this.viewControls.userInputCtrl.disabled = true;

        let p1Sc = parseInt(this.viewControls.score.getScore(1));
        let p2Sc = parseInt(this.viewControls.score.getScore(2));

        this.viewControls.score.reset();

        if (p1Sc > p2Sc) {
            this.viewControls.score.setWinner("Player 1");
        } else if (p1Sc < p2Sc) {
            this.viewControls.score.setWinner("Player 2");
        } else {
            this.viewControls.score.setWinner("Empate");
        }

        this.viewControls.winnerBox.classList.remove("off");
        this.viewControls.winnerBoxAction.addEventListener('click', (e) => {
            this.viewControls.winnerBox.classList.add("off");
        })
        this.viewControls.userSentenceCtrl.innerText = "";
        this.viewControls.userInputCtrl.value = "";
        console.log("[Players have finished] - Breakdown");

    }

}
