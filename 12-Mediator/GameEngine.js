export default class GameEngine
{
    constructor(collaborator)
    {
        this.sentences = [
            "Getting in your daily Bible reading is important to a lot of people...",
            "If you're looking for a wonderful way to begin the day...",
            "Since you're never sure which Bible verse is going to appear...",
            "This tool can be an excellent way for you to test your Bible knowledge..."
        ];

        this.timeout = 10;
        this.curTime = 0;
        this.intervalHnd = null;
        this.points = 0;
        this.collaborator = collaborator;
        this.curSentence = "";
    }

    start()
    {
        this.intervalHnd = setInterval(() => {
            this.sendTime()
        }, 1000);
        console.log("handler: ", this.intervalHnd);

    }

    getRandomSentence() {
        this.curSentence = this.sentences[Math.floor(Math.random() * 4)];
        return this.curSentence;
    }

    sendTime()
    {
        this.curTime += 1;
        if (this.curTime > this.timeout) {
            clearInterval(this.intervalHnd);
            this.collaborator.setTimeout();
            this.curTime = 0;
            return -1;
        }
        this.collaborator.setTime(this.curTime);
        return this.curTime;
    }

    stopTime() {
        clearInterval(this.intervalHnd);
    }

    setPlayerResult(sentence) {
        if (this.curSentence === sentence) {
            return (this.curSentence.length * 4) + ((this.timeout - this.curTime) * 2);
        }

        let points = 0;
        for (let idx in this.curSentence) {
            if (sentence !== undefined && sentence[idx] !== undefined && sentence[idx] === this.curSentence[idx]) {
                points ++
            }
        }

        if (points > this.curSentence.length * 0.7) {
            return (points * 2);
        }

        this.resetTime();

        return points;
    }

    resetTime()
    {
        this.curTime = 0;
    }
}
