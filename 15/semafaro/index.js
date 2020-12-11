function semafaro(estado){
    switch(estado){
        case 'verde':
            console.log('Pode passar');
            break

        case 'amarelo':
            console.log('Atencao o sinal ira fechar');
            break

        case 'vermelho':
            console.log('Aguarde para atravessar o sinal esta fechado');
            break

        default:
            console.log(`Digite um cor valida, ${estado} nao e uma cor valida`);
    }
}

semafaro('azul');