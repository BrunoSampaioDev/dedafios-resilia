let custoPizza = 18.00;
let valorPizzaVendida = 36.00;
let nomePizza = 'Calabreza';
let impostoPizza = ((valorPizzaVendida / 100) * 8.9).toFixed(2);

function calcularPizza(valorDeVenda, custo){
    return `Para a pizza ${nomePizza} o lucro liquido é de R$ ${(valorDeVenda - custo) - impostoPizza} é o imporsto e de R$ ${impostoPizza}`
}

console.log(calcularPizza(valorPizzaVendida, custoPizza));

