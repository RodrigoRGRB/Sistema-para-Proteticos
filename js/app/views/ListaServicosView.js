class ListaServicosView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <input list="servicos" type="text" name="servicosDigitadoView" id="servicoDigitado" class="form-control" onfocusout="notasController.servicosOnChange()">
        <datalist id="servicos">
               ${model.servicos.map(n =>
                   `
                    <option value="${n.servico}">
                   `
               ).join('')}
        </datalist>
        `;
 
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

}