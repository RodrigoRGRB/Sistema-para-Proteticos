class ListaDentistas{

    constructor(){
        if(ListaDentistas.exist){
            return ListaDentistas.instance;
        }
                
        this._listaDentista = [];
        ListaDentistas.instance = this;
        ListaDentistas.exist = true;
        return this;
        
    }

    adiciona(dentista){
        this._listaDentista.push(dentista);
    }

    get dentistas(){
        return [].concat(this._listaDentista);
    }


}