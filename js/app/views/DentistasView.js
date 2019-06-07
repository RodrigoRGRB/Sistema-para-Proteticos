class DentistasView{
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>FOTO</th>
                    <th>DENTISTA</th>
                    <th>TELEFONE</th>
                    <th>EMAIL</th>
                    <th>Ação</th>
                </tr>
            </thead>

            <tbody>
              ${model.dentistas.map(n =>
                `
                <tr>
                    <td><img src="${n.foto}" class="cropcircle"></td>
                    <td>${n.nome}</td>
                    <td>${n.telefone}</td>
                    <td>${n.email}</td>
                    <td>Editar / Excluir</td>
                </tr>
                `).join('')}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}