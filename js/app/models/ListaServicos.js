class ListaServicos{

    constructor(){
        this._servicos = [];
    }

    adiciona(servico){
        this._servicos.push(servico);
    }

    get servicos(){
        return [].concat(this._servicos);
    }

}