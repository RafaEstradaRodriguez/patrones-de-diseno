import { Payment } from "./Payment.js";

export class CreditCard extends Payment
{
    constructor()
    {
        super();
    }

    hasAssocTax()
    {
        return false;
    }

    getType() {
        return "Tarjeta de crédito";
    }

}