/* Esto es sólo un ejemplo para simplificar la explicación del patrón.
   Por supuesto esto es una barbaridad en cuanto a seguridad !! */
const userExample = {
    user: "davinci",
    pass: "icnivad"
}

export default class UserManager
{
    constructor(user, pass) {
        this.user = user;
        this.pass = pass;
    }

    hasValidName()
    {
        let res = this.user == userExample.user;
        if (res) {
            console.log("[User Manager] - El nombre de usuario es correcto...");
        }
        return res;
    }

    hasValidPass()
    {
        let res = this.pass == userExample.pass;
        if (res) {
            console.log("[User Manager] - El pass de usuario es correcto...");
        }
        return res;
    }
}

