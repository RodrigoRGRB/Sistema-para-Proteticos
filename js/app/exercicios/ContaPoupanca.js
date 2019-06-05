class ContaPoupanca extends Conta{
    constructor(saldo){
        super(saldo);
    }

    atualiza(taxa){
        this.saldo = this.saldo + (taxa * 2);
    }
}