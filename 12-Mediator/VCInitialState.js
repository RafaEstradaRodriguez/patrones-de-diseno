export default class VCInitialState
{
    constructor(viewControls)
    {
        this.viewControls = viewControls;
    }

    setup(values)
    {
        this.viewControls.targetSentenceCtrl.innerText = values.frase;
        this.viewControls.userSentenceCtrl.style.height = (this.viewControls.targetSentenceCtrl.offsetHeight - 64) + "px";
        this.viewControls.timeCtrl.innerText = 0;
        this.viewControls.userActionCtrl.value = "Empezar";
        this.viewControls.userInputCtrl.disabled = true;
        this.viewControls.userInputCtrl.addEventListener('keyup', () => {
            this.viewControls.userSentenceCtrl.innerText = this.viewControls.userInputCtrl.value;
        });
        this.viewControls.winnerBox.classList.add("off");
    }

    resetTexts()
    {
        this.viewControls.p1Score.innerText = "0";
        this.viewControls.p2Score.innerText = "0";
    }
}
