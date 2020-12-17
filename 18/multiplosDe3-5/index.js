var multiplos = [];

function encontraMultiplos(length){
    
    for (i = 0; i < length; i++){
        if(i % 3 == 0){
            multiplos.push(i);
        }else if(i % 5 == 0){
            multiplos.push(i);
        }
    }
    console.log(multiplos);
}

encontraMultiplos(20);
