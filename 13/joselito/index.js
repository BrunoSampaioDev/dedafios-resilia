let laranjas = 10;
let vizinhos = 3

function dividirLaranjas(quantidadeLaranjas, quantidadeVisinhos){

    if(quantidadeLaranjas % quantidadeVisinhos == 0){
        console.log(`Cada vizinho ficara com ${quantidadeLaranjas / quantidadeVisinhos} laranja(s) e nao sobrou nada para joselito`)
    }else{
        console.log(`joselito ficara com ${quantidadeLaranjas % quantidadeVisinhos} laranjas(s) e seus vizinhos com ${Math.round(quantidadeLaranjas / quantidadeVisinhos)} laranjas cada um.`);
    }
}

console.log(dividirLaranjas(laranjas, vizinhos));
