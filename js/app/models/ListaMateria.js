class ListaMateria{

    constructor(){
        this._listaMateria = [];
        
        let materia = ["Páginas Iniciais","Gramática",
        "Interpretação de Texto",
        "Literatura",
        "Inglês",
        "Matemática",
        "História",
        "Geografia",
        "Biologia",
        "Física",
        "Química"]

        this.adiciona(materia);
    }

    adiciona(materia){
        this._listaMateria.push(materia);
    }

    get listaMateria(){
        return [].concat(this._listaMateria);
    }

}