export default class Player
{
    constructor(name)
    {
        this.score = 0;
        this.name = name;
        this.timePlayed = 99;
    }

    addScorePoint(score)
    {
        this.score = score;
    }

    timeFinished(time)
    {
        this.timePlayed = time;
    }
}