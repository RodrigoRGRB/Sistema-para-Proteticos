class ServicosView{

    constructor(elemento){

        this._elemento = elemento;

    }

    _template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>SERVIÇOS</th>
                    <th>VALOR</th>
                    <th>Ação</th>
                </tr>
            </thead>

            <tbody>
               ${model.servicos.map(n =>
                   `
                    <tr>
                        <td>${n.servico}</td>
                        <td>${n.valor}</td>
                        <td>Editar / Excluir</td>
                    </tr>
                   `
               ).join('')}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `;
    }
    
    update(model){
        this._elemento.innerHTML = this._template(model);
    }



}