/* Esto es sólo un ejemplo para simplificar la explicación del patrón.
   Por supuesto esto es una barbaridad en cuanto a seguridad !! */
const userExample = {
    funds: 50
}

export default class FundsManager
{
    constructor() {
        this.user = userExample;
        this.minDeposit = 10;
    }

    withdrawal(amount)
    {
        if (amount <= userExample.funds) {
            this.user.funds -= amount;
            console.log(`[Funds Manager] - El retiro de ${amount} € se ha realizado con éxito`);
            return true;
        } else {
            console.log(`[Funds Manager] - El retiro de ${amount} € no se ha podido realizar. No tiene fondos suficientes`)
            return false;
        }
    }

    deposit(amount) {
        if (amount > this.minDeposit) {
            this.user.funds += amount;
            console.log(`[Funds Manager] - El ingreso de ${amount} € se ha producido con éxito`);
            return true;
        } else {
            console.log(`[Funds Manager] - El ingreso de ${amount} € no se ha podido producir. Al menos ha de ingresar ${this.minDeposit} €`);
            return false;
        }
    }

    transaction(amount)
    {
        if (amount <= userExample.funds) {
            this.user.funds -= amount;
            console.log(`[Funds Manager] - Se ha producido un pago de ${amount} € en concepto de apuesta`);
            return true;
        } else {
            console.log(`[Funds Manager] - Se ha intentado un pago de ${amount} € en BetMatch. No tiene fondos suficientes`)
            return false;
        }
    }

    availableFunds() {
        console.log(`[Funds Manager] - Tiene usted ${this.user.funds} €.`)
        return this.user.funds;
    }

}
