var alunosMatriculados = [ "a", "b", "c", "d", "e" ];

// Presença diária
var presencaSegunda = [ "b", "d", "e" ];
var presencaTerca = [ "a", "b", "c" ];
var presencaQuarta = [ "a", "b", "e" ];
var presencaQuinta = [ "a", "b", "c", "d" ];
var presencaSexta = [ "a", "b", "c", "d", "e" ];

var presencaSemana = [
    presencaSegunda,
    presencaTerca,
    presencaQuarta,
    presencaQuinta,
    presencaSexta
]

var mediaPresencaSemanal = [];

function presencaSemanaCalc(arrayDePresenca){
    var contador = 0;
    
    for(var i = 0; i < arrayDePresenca.length; i ++){
        
        mediaPresencaSemanal.push(Math.max(arrayDePresenca[i].length));
    }
    /* console.log(mediaPresencaSemanal); */
    
    for(var i = 0; i < mediaPresencaSemanal.length; i ++){
        (contador += mediaPresencaSemanal[i] / 25) * 100;
        
    }
    console.log(contador);

}

presencaSemanaCalc(presencaSemana);