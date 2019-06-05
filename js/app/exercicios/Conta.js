class Conta{

    constructor(saldo){
        this.saldo = saldo;
    }

    get saldo(){
        return this.saldo
    }

    atualiza(taxa){
        throw new Error("jogue uma exceção para garantir que ninguém chame o método sem ter uma filha em mãos.");
    }

}