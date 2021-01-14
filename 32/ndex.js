let form = document.getElementById('form');

let dict = {}

form.addEventListener('submit', function(){
    event.preventDefault()
    let chave = form.chave.value
    let valor = form.valor.value

    dict[chave] = valor
    console.log(dict)
});
