
let formCarro = document.querySelector('#formCarro');
let tabelaCarros = document.getElementById('tabelaCarros');


let arraycarros = [];

function car() {

    let carro = {
        status: false,
        marca: this.formCarro.marca.value,
        modelo: this.formCarro.modelo.value,
        placa: this.formCarro.placa.value,
        cadastrar: function () {
            let linha = document.createElement('tr');
            let tdMarca = document.createElement('td');
            let tdModelo = document.createElement('td');
            let tdPlaca = document.createElement('td');
            let tdButton = document.createElement('button');


            tdMarca.textContent = this.marca;
            tdModelo.textContent = this.modelo;
            tdPlaca.textContent = this.placa;
            tdButton.textContent = 'Alugar'

            linha.appendChild(tdMarca);
            linha.appendChild(tdModelo);
            linha.appendChild(tdPlaca);
            linha.appendChild(tdButton);

            tabelaCarros.appendChild(linha);

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
        }
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