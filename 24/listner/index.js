var btn = document.getElementById('btn');

btn.addEventListener('mouseenter', function(){
    btn.textContent = 'Brasil'

    btn.addEventListener('mouseleave', function(){
        btn.textContent = 'Portugal'
        console.log('passei')
        
    });
});
