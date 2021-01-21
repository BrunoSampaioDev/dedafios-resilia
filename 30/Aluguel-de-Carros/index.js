
let formCarro = document.querySelector('#formCarro');
let tabelaCarros = document.getElementById('tabelaCarros');
let btnFecharModal = document.querySelector('.btnFecharModal');
let btnMostrarModal = document.querySelector('.mostrarModal');

btnMostrarModal.addEventListener('click', function () {
    event.preventDefault()
    let modal = document.querySelector('.formCadastroCarros');
    modal.classList.add('mostrarModal');

});


btnFecharModal.addEventListener('click', function () {
    let modal = document.querySelector('.formCadastroCarros');
    modal.classList.remove('mostrarModal');
});

let arraycarros = [];
let arrayAlugados = [];
let arrayEntregues = [];

function car() {

    let carro = {
        status: false,
        marca: this.formCarro.marca.value,
        modelo: this.formCarro.modelo.value,
        placa: this.formCarro.placa.value,
        cor: this.formCarro.cor.value,
        documento: this.formCarro.documento.value,
        ratreador: this.formCarro.ratreador.value,

        cadastrar: function () {
            let linha = document.createElement('div');
            let tdMarca = document.createElement('p');
            let tdModelo = document.createElement('p');
            let tdPlaca = document.createElement('p');
            let tdCor = document.createElement('p');
            let tdDocumento = document.createElement('p');
            let tdRatreador = document.createElement('p');
            let tdButton = document.createElement('button');

            tdMarca.textContent = this.marca;
            tdModelo.textContent = this.modelo;
            tdPlaca.textContent = this.placa;
            tdCor.textContent = this.cor;
            tdDocumento.textContent = this.documento;
            tdRatreador.textContent = this.ratreador;
            tdButton.textContent = 'Alugar'

            linha.appendChild(tdMarca);
            linha.appendChild(tdModelo);
            linha.appendChild(tdPlaca);
            linha.appendChild(tdCor);
            linha.appendChild(tdDocumento);
            linha.appendChild(tdRatreador);
            linha.appendChild(tdButton);
            linha.classList.add('carroEmEstoque');

            tabelaCarros.appendChild(linha);

            let totalCarrosCadastrados = document.querySelector('.total-carros-cadastrados');
            totalCarrosCadastrados.textContent = arraycarros.length;


            formCarro.reset();

            tdButton.addEventListener('click', function () {

                if (carro.status == false) {
                    carro.alugar();
                    tdButton.textContent = 'Alugado';
                    tdButton.classList.add('btnAlugado');
                    linha.classList.add('backAlugado');
                    linha.classList.add('backSumir');

                    let totalCarrosAlugados = document.querySelector('.total-carros-alugados');
                    arrayAlugados.push(carro);
                    totalCarrosAlugados.textContent = arrayAlugados.length;
                } else {
                    tdButton.textContent = 'Alugar';
                    tdButton.classList.remove('btnAlugado');

                    let totalCarrosAlugados = document.querySelector('.total-carros-alugados');
                    arrayEntregues.push(carro);
                    totalCarrosAlugados.textContent -= arrayEntregues.length;
                    arrayAlugados.pop()
                    arrayEntregues.pop()
                    carro.devolver();
                    linha.classList.add('backSumir');
                    setTimeout(function () {
                        linha.classList.remove('backAlugado');
                    }, 300);

                };

                let divCarroCliente = document.querySelector('.carroXcliente');
                divCarroCliente.classList.add('mostrarModal');
                

                let local = localStorage.getItem('Cliente');
                let clienteNaTela = JSON.parse(local);


                let clienteXcarro = document.querySelector('.formSelecioneCliente');
                clienteXcarro.innerHTML = `
                    
                    <select name="Selecione">
                        <option value="selecione">Selecione o Cliente</option>
                        <option value="selecione">${clienteNaTela.nome}</option>
                        <input class="inp btn_submit" type="submit">
                    </select>
                `
            });

        },
        alugar: function () {

            this.status = true
        },
        devolver: function () {

            this.status = false
        },

    }
    arraycarros.push(carro);
    carro.cadastrar();

    return carro;

}




formCarro.addEventListener('submit', function () {

    event.preventDefault();
    car();

});