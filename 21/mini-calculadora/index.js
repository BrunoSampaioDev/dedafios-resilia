var num1 = Number(prompt('Digite um numero'));
var operador = prompt('Digite um operador');
var num2 = Number(prompt('Digite outro numero'));

function calcula(num1, operador, num2){
    switch(operador){
        case '+':
            alert(num1 + num2);
            break
        case '-':
            alert(num1 - num2);
            break
        case '*':
            alert(num1 * num2);
        case '/':
            if(num2 == 0){
                alert(null);
            } else{
                alert(num1 / num2);
            }
        default:
            alert(null);
    }   
}

calcula(num1, operador, num2);