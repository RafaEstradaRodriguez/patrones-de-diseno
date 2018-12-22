import UserManager from "./UserManager.js";
import FundsManager from "./FundsManager.js";
import BetManager from "./BetManager.js";

export default class BetsFacade
{
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;

        this.fundsManager = new FundsManager();
        this.userManager = new UserManager(user, pass);
        this.betManager = new BetManager();
    }

    usuarioValido()
    {
        if (!this.userManager.hasValidName() || !this.userManager.hasValidPass()) {
            return false;
        }
        return true;
    }

    apostar(amount)
    {
        if (!this.usuarioValido()) {
            console.log("[Proceso de apuesta] - Los datos de usuario son incorrectos...");
            return -1;
        }

        console.log("[Proceso de apuesta] - Los datos de usuario son correctos...");

        if (!this.betManager.bet(amount)) {
            console.log("[Proceso de apuesta] - La apuesta no ha podido realizarse.");
            return -2;
        }
        console.log("[Proceso de apuesta] - La apuesta se ha realizado con éxito");
        console.log("[Funds Manager] - Dispone actualmente de %d €", this.fundsManager.availableFunds());

        return true;
    }

    ingresar(amount)
    {
        if (!this.usuarioValido()) {
            console.log("[Proceso de ingreso] - Los datos de usuario son incorrectos...");
            return -1;
        }

        if (!this.fundsManager.deposit(amount)) {
            console.log("[Proceso de ingreso] - No se ha podido realizar el ingreso...");
            return -2;
        }

        console.log("[Proceso de ingreso] - El ingreso ha sido realizado.");
        console.log("Ahora dispone de ", this.fundsManager.availableFunds());

        return true;
    }

    sacar(amount)
    {
        if (!this.usuarioValido()) {
            console.log("[Proceso de retirada de fondos] - Los datos de usuario son incorrectos...");
            return -1;
        }

        if (!this.fundsManager.withdrawal(amount)) {
            console.log("[Proceso de retirada de fondos] - No se ha podido realizar la retirada de fondos...");
            return -2;
        }

        console.log("[Proceso de retirada de fondos] - Se ha retirado los fondos correctamente.");
        console.log("Ahora dispone de ", this.fundsManager.availableFunds());

        return true;
    }
}
