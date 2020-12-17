var meuArray = [0, -1, -2, 2, 4, 5, 7, 8];
var acumulador = 0;



function SomaOsPositivos(meuArray) {

    for (var i = 0; i < meuArray.length; i++) {
        if (meuArray[i] > 0) {
            acumulador += meuArray[i];
        }
    };
    console.log(acumulador);
}
SomaOsPositivos(meuArray);