class NotasView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <datalist id="servicos">
               ${model.servicos.map(n =>
                   `
                    <option value="${n.servico}">
                   `
               ).join('')}
        </datalist>
        `;
 
    }

    _update(model){
        this._elemento.innerHTML = this._template(model);
    }

}