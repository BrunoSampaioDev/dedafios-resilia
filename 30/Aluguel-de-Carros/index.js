
let formCarro = document.querySelector('#formCarro');
let tabelaCarros = document.getElementById('tabelaCarros');
let btnFecharModal = document.querySelector('.btnFecharModal');
let btnMostrarModal = document.querySelector('.mostrarModal');

btnMostrarModal.addEventListener('click', function(){
    event.preventDefault()
    let modal = document.querySelector('.formCadastroCarros');
    modal.classList.add('mostrarModal');
});

btnFecharModal.addEventListener('click', function(){
    let modal = document.querySelector('.formCadastroCarros');
    modal.classList.remove('mostrarModal');
    modal.classList.add('fecharModal');
    
});

let arraycarros = [];

function car() {

    let carro = {
        status: false,
        marca: this.formCarro.marca.value,
        modelo: this.formCarro.modelo.value,
        placa: this.formCarro.placa.value,
        
        cadastrar: function () {
            let linha = document.createElement('div');
            let tdMarca = document.createElement('p');
            let tdModelo = document.createElement('p');
            let tdPlaca = document.createElement('p');
            let tdButton = document.createElement('button');


            tdMarca.textContent = this.marca;
            tdModelo.textContent = this.modelo;
            tdPlaca.textContent = this.placa;
            tdButton.textContent = 'Alugar'

            linha.appendChild(tdMarca);
            linha.appendChild(tdModelo);
            linha.appendChild(tdPlaca);
            linha.appendChild(tdButton);
            linha.classList.add('carroEmEstoque')

            tabelaCarros.appendChild(linha);
            formCarro.reset()

            tdButton.addEventListener('click', function () {

                if (carro.status == false) {
                    carro.alugar()
                    tdButton.textContent = 'Alugado'
                    tdButton.classList.add('btnAlugado')
                }else{
                    tdButton.textContent = 'Alugar'
                    tdButton.classList.remove('btnAlugado')
                    carro.devolver()
                }


            });
            


        },
        alugar: function () {
            alert('Carro Alugado')
            this.status = true
        },
        devolver:function(){
            alert('Carro Devolvido')
            this.status = false
        },
        
    }
    arraycarros.push(carro)
    carro.cadastrar()


    return carro

}




formCarro.addEventListener('submit', function () {

    event.preventDefault()
    car()
    console.log(arraycarros);
});












/*
carro.alugar()
console.log(carro.status)
carro.devolver()
carro.combustivel(10)
console.log(carro) */