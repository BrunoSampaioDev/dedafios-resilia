/* Function responsavel por fazer os calculos */
function calculaInflacao(valorInicial, valorFinal){
    
    return (valorFinal - valorInicial) / valorInicial * 100;
}

console.log(`A inflação no período foi de ${calculaInflacao(3.30, 4.50).toFixed(2)}% 
A estimativa de inflação diária á de ${(calculaInflacao(3.30, 4.50) / 6) .toFixed(2)}%`);
