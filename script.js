const amaButton = document.getElementById('ama');
const gostaButton = document.getElementById('gosta');
const responseText = document.getElementById('responseText');

gosta.addEventListener('click', function() {
    responseText.innerHTML = 'Que a morte os separe!';
});


ama.addEventListener('click', function() {
    responseText.innerHTML = 'KIAMA??? A GENTE SÓ AMA A DEUS! Gosta dele, gosta dele...';
});