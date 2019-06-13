class NotasView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <input list="servicos" name="servicos" class="form-control">
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