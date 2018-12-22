import * as constants from "./GameStatesDef.js";
import VCInitialState from "./VCInitialState.js";
import VCPlayingState from "./VCPlayingState.js";
import VCFinishingState from "./VCFinishingState.js";
import VCBreakdownState from "./VCBreakdownState.js";

export default class ViewControlsStates
{
    constructor(viewControls)
    {
        this.viewControls = viewControls;
    }

    setState(state, values)
    {
        switch (state) {
            case constants.INICIAL:
                new VCInitialState(this.viewControls).setup(values);
                break;

            case constants.P1_PLAYING:
                values.player = "1";
                return new VCPlayingState(this.viewControls).setup(values);
                break;

            case constants.P1_FINISHED:
                values.player = "1";
                return new VCFinishingState(this.viewControls).setup(values);
                break;

            case constants.P2_PLAYING:
                values.player = "2";
                return new VCPlayingState(this.viewControls).setup(values);
                break;

            case constants.P2_FINISHED:
                values.player = "2";
                return new VCFinishingState(this.viewControls).setup(values);
                break;

            case constants.BREAKDOWN:
                values.player = "all";
                new VCBreakdownState(this.viewControls).setup(values);
                break;
        }
    }

}
