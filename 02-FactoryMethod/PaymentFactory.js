/*
 * -- Hay que poner la extensión .js para que no de un 404 en Chrome --
 */

import { CreditCard } from './CreditCard.js';
import { CashDelivery } from './CashDelivery.js';

export class PaymentFactory
{
    static getTypes() {
        return {
            CreditCard: 1,
            CashDelivery: 2
        }
    }

    static getPayment(type)
    {
        switch (type) {
            case PaymentFactory.getTypes().CreditCard:
                return new CreditCard();

            case PaymentFactory.getTypes().CashDelivery:
                return new CashDelivery();

            default:
                return new CashDelivery();
        }
    }
}
