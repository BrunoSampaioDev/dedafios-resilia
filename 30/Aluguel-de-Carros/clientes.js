//btn fechar modal clientes
let btnFecharModalClientes = document.querySelector('.btnFecharModalClientes');

// modal form cadastro de clientes
let formClientes = document.querySelector('.formCadastroClientes');

//Btn cadasrar clientes
let btnCadastrarCliente = document.querySelector('.btnCadastrarCliente');

let formCadastroClientes = document.getElementById('formCliente');
// Abrir modal
btnCadastrarCliente.addEventListener('click', function(){
    event.preventDefault();
    formClientes.classList.add('mostrarModal');
});


// Fechar modal
btnFecharModalClientes.addEventListener('click', function(){
    formClientes.classList.remove('mostrarModal');
});



// Salvando cliente no local storage
let clientes = {
    nome: formCadastroClientes.nome,
    cnh: formCadastroClientes.cnh,
    cadatrar:function(){
        names = JSON.stringify({'nome':this.nome.value, 'cnh':this.cnh.value});
        localStorage.setItem('Cliente', names )
        
    }
}

formCadastroClientes.addEventListener('submit',function(){
    event.preventDefault();
    
    clientes.cadatrar();
});



