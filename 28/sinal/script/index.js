let formulario = document.querySelector('#formulario');


let animal = {

    nome: this.formulario.nome,
    raca: this.formulario.raca,
    idade: this.formulario.idade,
    cadastrar: cadastrar,
    limparCampos:limpar

}



formulario.addEventListener('submit',()=>{

    event.preventDefault()
    animal.cadastrar()
    animal.limparCampos()
    
})

function cadastrar(){
    let cadastrados = document.querySelector('.cadastrados');
    cadastrados.innerHTML = `
    <table>
         <tr> 
            <th> nome </th>
            <th> raca </th>
            <th> idade </th>
        </tr>
        <tr> 
            <td> ${nome.value} </td>
            <td> ${raca.value} </td>
            <td> ${idade.value} </td>
        </tr>
    </table>
    `
}
cadastrar()


function limpar(){

    nome.value = '';
    raca.value = '';
    idade.value = '';

}
