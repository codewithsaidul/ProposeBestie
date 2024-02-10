const besti = document.getElementById('love');
const butt = document.getElementById('btn');
const content = document.getElementById('contai');
butt.addEventListener('click', function() {
    besti.classList.add('propose');

    butt.classList.add('hidden')

    besti.innerText = "I Love You Boo😘😘😘";

    content.classList.add('baby')
})