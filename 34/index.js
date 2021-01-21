
let input = document.getElementById('formulario');
let nome = input.nome;
let raca = input.raca;
let cor = input.cor;
let idade = input.idade;

class Cachorro{
    constructor(nomes, raca, cor, idade){

        this.nome = nomes;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;

    };
    latir(){
        console.log('Au Au !');
    };

    andar(){
        console.log('Andou');
    };
};

input.addEventListener('submit',function(){
    event.preventDefault()
    novoCao = new Cachorro(nome.value, raca.value, cor.value, idade.value);

    console.log(novoCao);
    novoCao.latir();
    novoCao.andar();
});
