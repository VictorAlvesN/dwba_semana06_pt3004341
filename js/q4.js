var a = []

a[0] = new aluno ("Victor", "Alves", 8, 10);
a[1] = new aluno ("Paula", "Silva", 3, 7);
a[2] = new aluno ("José", "Olieira", 10, 4);
a[3] = new aluno ("Luísa", "Couto", 10, 10);
a[4] = new aluno ("Igor", "Coelho", 8, 10);



mostrar();

function mostrar(){
    for(i=0; i<5; i++){
        alert("Nome do aluno: " +a[i].nomeCompleto()+ "\nMédia: " +a[i].media() + "\nSituação: " + a[i].situacao());
    }
}

class aluno{
    constructor (primeiroNome, segundoNome, n1, n2){
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.n1 = n1;
        this.n2 = n2;
    }

    nomeCompleto(){
        var nome_comp = this.primeiroNome + " " + this.segundoNome;
        return this.nome_comp;
    }

    media(){
        return (this.n1*0.6) + (this.n2*0.4);
    }

    situacao(){
        if (((this.n1*0.6)+(this.n2*0.4)) > 6)
            return "Aprovado";
        else
            return "Reprovado";
    }
}

