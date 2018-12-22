import * as constants from "./GameStatesDef.js";

export default class GameStates
{
    constructor() {
        this.states = [
            constants.INICIAL,
            constants.P1_PLAYING,
            constants.P1_FINISHED,
            constants.P2_PLAYING,
            constants.P2_FINISHED,
            constants.BREAKDOWN
        ];

        this.curState = constants.INICIAL;
    }

    nextState()
    {
        let idx = this.getCurStateIndex();

        if (this.curState == '' || idx == (this.states.length - 1)) {
            this.curState = 'initial';
        } else {
            this.curState = this.states[idx + 1];
        }

        return this.curState;
    }

    getCurStateIndex()
    {
        return this.states.indexOf(this.curState);
    }

    getCurState()
    {
        return this.curState;
    }

    getCurPlayer()
    {
        if (this.curState === this.states[constants.P1_PLAYING] || this.curState == this.states[constants.P1_FINISHED]) {
            return 1;
        }
        return 2;
    }

    reset() {
        this.curState = this.states[0];
        return this.curState;
    }


}
