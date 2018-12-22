import FundsManager from './FundsManager.js';

const userExample = {
    bets: []
}

export default class BetManager
{
    constructor() {
        this.bets = userExample.bets;
    }

    bet(amount) {
        let fundsManager = new FundsManager();
        if (fundsManager.availableFunds() >= amount) {
            console.log(`[Bet Manager] - Se ha producido una apuesta de ${amount} € a las ${new Date()}`);
            fundsManager.transaction(amount);
            this.bets.push({fecha: new Date, cantidad: amount});
            return true;
        } else {
            console.log(`[Bet Manager] - Se ha producido un error por fondos insuficientes. No dispone de ${amount} €.`);
            return false;
        }
    }

    getApuestas()
    {
        return this.bets;
    }

    getUltimaApuesta()
    {
        return this.bets[this.bets.length - 1];
    }
}
