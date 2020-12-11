let custoPizza = 18.00;
let valorPizzaVendida = 36.00;
let nomePizza = 'Calabreza';
let impostoPizza = ((valorPizzaVendida / 100) * 8.9);

function calcularPizza(valorDeVenda, custo){
    return `Para a pizza ${nomePizza} o lucro liquido é de R$ ${((valorDeVenda - custo) - impostoPizza).toFixed(2)} e o imporsto é de R$ ${(impostoPizza).toFixed(2)}`
}

console.log(calcularPizza(valorPizzaVendida, custoPizza));
