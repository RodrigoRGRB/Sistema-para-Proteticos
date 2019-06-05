class DentistasController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputNome = $("#nome");
        this._inputTelefone = $("#telefone");
        this._inputEmail = $("#email");
        this._inputEndereco = $("#endereco");
        this._inputFoto = $("#foto");

        this._listaDentistas = new ListaDentistas();

    }

    adiciona(event){
        event.preventDefault();
        
        this._listaDentistas.adiciona(this._criaDentista())
        console.log(this._listaDentistas);
    }

    _criaDentista(){
        return new Dentistas(
            this._inputNome.value,
            this._inputTelefone.value,
            this._inputEmail.value,
            this._inputEndereco.value,
            this._inputFoto.value
        );
    }
}