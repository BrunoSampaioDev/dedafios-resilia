let nomes = ['Bruno', 'Rafa', 'Paulo', 'Marcos'];
function exibir(){
    for(let i = 0; i < nomes.length; i++){
    
        var button = document.createElement('button');
        button.setAttribute('type', 'button')
        button.appendChild(document.createTextNode(`${nomes[i]}`));
        document.body.appendChild(button);
        
        button.addEventListener('click', () => {
            alert(`${nomes[i]}`)
        });
    };
};