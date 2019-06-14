class NotasController{

    constructor(){
        let $ = document.querySelector.bind(document);


        //Servicos
        this._listaServicos = $("#listaServicosView");
        this._todosServicos = new ListaServicos();
        this._listaServicosView = new ListaServicosView(this._listaServicos);
        this._listaServicosView.update(this._todosServicos);
        //Campo digitado
        

        this._quantidadeServicoView = $("#quantidadeServicoView");
        this._valorServicoView = $("#valorServicoView");
        this._descontoServicoView = $("#descontoServicoView");

        this._inputData = $("#data");
        this._inputPaciente = $("#nomePaciente");
        
        

        //Servicos

        //Dentistas
        this._listaDentistas = $("#listaDentistaView");
        this._listaDentistasView = new ListaDentistasView(this._listaDentistas);
        this._todosDentistas = new ListaDentistas();
        this._listaDentistasView.update(this._todosDentistas);
    }

    servicosOnFocus(){
        this._listaServicosView.update(this._todosServicos);
    }

    servicosOnChange(){
        this._servicoDigitado = document.querySelector("#servicoDigitado");
        let valorRetornado;
        valorRetornado = this._todosServicos.buscaServico(this._servicoDigitado.value);
        //console.log(valorRetornado);
        this._valorServicoView.value = valorRetornado.valor;

    }

    dentistasOnFocus(){
        this._listaDentistasView.update(this._todosDentistas);
    }

    montaNota(){

        //Preparando
        this._inputDentista = document.querySelector("#dentistaDigitado");

        console.
        log(`Data: ${this._inputData.value}
Paciente: ${this._inputPaciente.value} 
Dentista: ${this._inputDentista.value}
        `)
    }

}