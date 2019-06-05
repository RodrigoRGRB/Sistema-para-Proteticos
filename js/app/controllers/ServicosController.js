class ServicosController{
    
    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputServico = $('#servico');
        this._inputValor = $('#valor');

        this._listaServicos = new ListaServicos();

        this._servicosView = new ServicosView($('#servicosView'));
        this._servicosView.update(this._listaServicos);
    }

    adiciona(event){

        event.preventDefault();
        
        this._listaServicos.adiciona(this._criaServico());

        this._servicosView.update(this._listaServicos);
        
        this._limpaFormulario();


    }

    _criaServico(){
        return new Servicos(
            this._inputServico.value,
            this._inputValor.value
        );
    }

    _limpaFormulario(){

        this._inputServico.value = "";
        this._inputValor.value = 0.01;

        this._inputServico.focus;
    }
}