let numero = document.querySelector('input');
let dobro = document.querySelector('.dobro');
let metade = document.querySelector('.metade');


function calc() {

    if (numero.value > 0) {
        let dobrar = numero.value * 2;
        let dividir = numero.value / 2;
        dobro.innerHTML = `O dobro de ${numero.value} é ${dobrar}`;
        metade.innerHTML = `A metade de ${numero.value} é ${dividir}`;
    }else{
        dobro.innerHTML = 'Por favor digite um numero acima de Zero.'
    }

}