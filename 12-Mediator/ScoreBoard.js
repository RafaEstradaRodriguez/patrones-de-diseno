export default class ScoreBoard
{
    constructor(document)
    {
        this.view = document;
    }

    setScore(position, value) {
        this.view.querySelector(`#score-player-${position}`).innerText = value;
    }

    setFinalScore(position, value) {
        this.view.querySelector(`#p${position}-score-final`).innerText = value;
    }

    setWinner(value) {
        this.view.querySelector("#winner-name").innerText = value;
    }

    getScore(position) {
        return this.view.querySelector(`#score-player-${position}`).innerText;
    }

    reset() {
        this.setScore(1, 0);
        this.setScore(2, 0);
    }
}
