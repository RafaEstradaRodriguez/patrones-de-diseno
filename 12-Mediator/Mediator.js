import GameEngine from "./GameEngine.js";
import * as constants from "./GameStatesDef.js";

export default class TypingGameMediator
{
    constructor(viewControls, gameStates, ViewControlsStates)
    {
        this.viewControls = viewControls;
        this.gameEngine = new GameEngine(this);
        this.gameStates = gameStates;
        this.viewStates = ViewControlsStates;
    }

    startGame(events = true)
    {
        this.viewStates.setState(this.gameStates.reset(), {
            frase: this.gameEngine.getRandomSentence(),
        });

        if (events) {
            this.startViewControlEvents();
        }
    }

    startViewControlEvents()
    {
        this.viewControls.userActionCtrl.addEventListener('click', () => {

            let curState = this.gameStates.getCurState();
            console.log(curState);

            // ... El player (1|2) comienza a jugar
            if (curState == constants.INICIAL || curState == constants.P1_FINISHED) {

                this.viewStates.setState(this.gameStates.nextState(), {
                    player: this.gameStates.getCurPlayer()
                }).then(res => {
                    this.viewControls.playerTurn.classList.add("off");
                    this.viewControls.userInputCtrl.focus();
                    this.gameEngine.start();
                });
                console.log("[User.Click] - %s a %s", curState, this.gameStates.getCurState())
                return;
            }

            // ... Si el usuario pulsa terminar antes del final del tiempo definido
            if (curState == constants.P1_PLAYING || curState == constants.P2_PLAYING) {
                this.gameEngine.stopTime();
                this.finishPlayer(this.viewControls.timeCtrl.innerText, curState);
                return;
            }

            this.startGame(false);
        })
    }

    setTime(value)
    {
        this.viewControls.timeCtrl.innerText = value;
    }

    setTimeout()
    {
        this.finishPlayer(`<span>TIME OUT</span>`, this.gameStates.getCurState());
    }

    finishPlayer(time, curState)
    {
        this.viewStates.setState(this.gameStates.nextState(), {
            tiempo: time,
            points: this.gameEngine.setPlayerResult(this.viewControls.userSentenceCtrl.innerText)
        }).then(res => {
            this.viewControls.playerTurn.classList.add("off");
        });

        curState = this.gameStates.getCurState();

        console.log("[User.Click] - %s a %s", curState, this.gameStates.getCurState())

        if (curState == constants.P2_FINISHED) {
            this.viewStates.setState(this.gameStates.nextState(), {});
        }
    }




}
