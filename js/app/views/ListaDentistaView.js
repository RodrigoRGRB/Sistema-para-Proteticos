class ListaDentistasView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <input list="dentistas" name="dentista" id="dentistaDigitado" class="form-control">
        <datalist id="dentistas">
               ${model.dentistas.map(n =>
                   `
                    <option value="${n.nome}">
                   `
               ).join('')}
        </datalist>
        `;
 
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

}