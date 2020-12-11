function idadeDirigir(idadePermitida, idadeCondutor){
    if(idadeCondutor >= idadePermitida){
        console.log('Voce pode dirigir.');
    }else{
        console.log('voce ainda nao tem idade para dirigir.');
    }
}

idadeDirigir(18,21);