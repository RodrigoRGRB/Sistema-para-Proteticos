class ListaServicos{

    constructor(){
        if(ListaServicos.exist){
            return ListaServicos.instance;
        }
                
        this._servicos = [];
        ListaServicos.instance = this;
        ListaServicos.exist = true;
        return this;
        
    }

    adiciona(servico){
        this._servicos.push(servico);
    }

    get servicos(){
        return [].concat(this._servicos);
    }

    buscaServico(busca){
        let valorProcurado = "";
        this._servicos.map(s => {
            //console.log(busca);
            //console.log(s.servico);
            if(busca == s.servico){
                //console.log("achei");
                valorProcurado = s;
            }
        });
        console.log(valorProcurado);
        return valorProcurado;
    }

}