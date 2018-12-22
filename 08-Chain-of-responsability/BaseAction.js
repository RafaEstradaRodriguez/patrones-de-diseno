export default class BaseAction
{
    constructor()
    {
        this.nextAction = null;
        this.name = "[Base]";
    }

    setNextAction(action)
    {
        this.nextAction = action;
    }

    render() {

        // ... Realizamos la acción común
        let data = this.doAction(...arguments);

        // ... Trazamos el log de la acción
        this.log();

        // ... Si tenemos que derivar al siguiente lo hacemos
        if (this.nextAction) {
            this.nextAction.render(data);
        }
    }

    log() {
        console.log(`[Base] - Nada especial aquí porque es la clase base`);
    }

    doAction() {
        // ... Estará sobreescrita en las clases hijas
    }
}
