import { Payment } from "./Payment.js";

export class CashDelivery extends Payment
{
    constructor()
    {
        super();
    }

    hasAssocTax()
    {
        return true;
    }

    getType() {
        return "Contrareembolso";
    }
}