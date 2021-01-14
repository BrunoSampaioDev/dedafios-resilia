function cachorro(nomeCao, pesoCao, idadeCao) {

    let animal = {

        nome: nomeCao,
        peso: pesoCao,
        idade: idadeCao,
        vacinas: [],
        vacinar: function(nomeVacina){
            animal.vacinas.push(nomeVacina);
        }
        
    }

    return animal
}

let cachorro1 = cachorro('Bolota','12','3');
let cachorro2 = cachorro('Mery','11','2');

cachorro2.vacinar('Raiva')
cachorro1.vacinar('Tetano');


console.log(cachorro1);
console.log(cachorro2);

console.log(cachorro2.vacinas);








