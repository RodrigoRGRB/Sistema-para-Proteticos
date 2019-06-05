class Dentistas{

    constructor(nome, telefone, email, endereco,foto){
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
        this._endereco = endereco;
        this._foto = foto;

        Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }

    get telefone(){
        return this._telefone;
    }

    get email(){
        return this._email;
    }

    get endereco(){
        return this._endereco;
    }

    get foto(){
        return this._foto;
    }


}