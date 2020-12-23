var nomes = ['Giulia', 'Ana Vitória', 'Peter', 'Bruno'];


nomes.forEach(e => {
    var btn = document.createElement('button');
    btn.textContent = e;

    btn.addEventListener('click', () => {
        alert(e);
    });
    document.body.append(btn);

});




