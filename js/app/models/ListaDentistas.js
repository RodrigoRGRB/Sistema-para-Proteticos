class ListaDentistas{

    constructor(){
        this._listaDentista = [];
    }

    adiciona(dentista){
        this._listaDentista.push(dentista);
    }

    get dentistas(){
        return [].concat(this._listaDentista);
    }

}