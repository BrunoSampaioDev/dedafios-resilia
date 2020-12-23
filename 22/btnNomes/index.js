var nomes = ['Giulia', 'Ana Vitória', 'Peter', 'Bruno'];


nomes.forEach(e => {
    var nomeFront = document.getElementById('nome-front')
    var btn = document.createElement('button');
    btn.textContent = e;

    btn.addEventListener('click', () => {
        nomeFront.innerHTML = e;
    });
    document.body.append(btn);

});




