let umBeloArray =
[
    {
        nome: "Gabriel",
        idade: 0, // deveria ser 10
    },
    {
        nome: "Lais",
        idade: 0, // deveria ser 20
    },
    {
        nome: "Vitrola",
        idade: 0, // deveria ser 30
    },
    {
        nome: "qual_das_anas",
        idade: 0, // deveria ser 40
    },
];



umBeloArray.forEach(function(elemento, indice){
    
    elemento.idade += (indice * 10) + 10;

});

console.log( umBeloArray );
