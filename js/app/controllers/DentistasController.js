class DentistasController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputNome = $("#nome");
        this._inputTelefone = $("#telefone");
        this._inputEmail = $("#email");
        this._inputEndereco = $("#endereco");
        this._inputFoto = $("#armazenaFoto");

        this._inputBusca = $("#buscaDentista");
                
        

        this._listaDentistas = new ListaDentistas();

        this._dentistaView = new DentistasView($("#dentistaView"));
        this._dentistaView.update(this._listaDentistas);
    }

    adiciona(event){
        event.preventDefault();
        
        
        this._listaDentistas.adiciona(this._criaDentista())
        console.log(this._listaDentistas);

        this._dentistaView.update(this._listaDentistas);

       
    }

    busca(){
        console.log(this._inputBusca.value)

          
            var dentistas = document.querySelectorAll(".dentista");
  
            if(this._inputBusca.value.length > 0){
                for(var i = 0; i < dentistas.length; i++){
                var dentista = dentistas[i];
                var tdNome = dentista.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var expressao = new RegExp(this._inputBusca.value,"i");

                if (!expressao.test(nome)){
                    dentista.classList.add("invisivel");
                }else{
                    dentista.classList.remove("invisivel");
                }
                }
            }else{
                for(var i = 0; i < dentistas.length; i++){
                dentista = dentistas[i];
                dentista.classList.remove("invisivel");
                }
            }
                        



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