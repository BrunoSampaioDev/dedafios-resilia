var inicial = prompt('digite um numero:');
var contador = 0;
var maiorUm = 0;
var maiorDois = 0;

while(contador < inicial){
    var entrada = prompt('digite um numero:');
    contador++

    if(entrada > maiorUm){
        maiorUm = entrada;
    }else if(entrada > maiorDois && maiorDois < maiorUm){
        maiorDois = entrada;
    }
}
console.log(maiorUm * maiorDois);