class Servicos{

    constructor(servico, valor){
        this._servico = servico;
        this._valor = valor;

        Object.freeze(this);
    }

    get servico(){
        return this._servico;
    }

    get valor(){
        return this._valor;
    }

}