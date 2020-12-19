var meuArray = [];
var mensagemUser = prompt('digite sua mensagem.');
var deslocamento = parseInt(prompt('Quantas casas quer avançar.'));

function caesar(mensagemCript, deslocamentoCript) {
    
    for (var i = 0; i < mensagemCript.length; i++) {
        meuArray.push(mensagemCript[i].charCodeAt(0) + deslocamentoCript);
        console.log(String.fromCharCode(meuArray[i]));
    }
}

caesar(mensagemUser, deslocamento);

