class NotasController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._listaServicos = $("#listaServicosView");
        this._listaServicosView = new NotasView(this._listaServicos);

        this._todosServicos = new ListaServicos();

        this._listaServicosView.update(this._todosServicos);
    }

}