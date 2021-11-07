function random(array) {
    return array[Math.floor(Math.random()*array.length)];
}

let respArea = document.querySelector('#resposta');

let opcoes = [
    'Sim!', 'Não!', 'Talvez!', 'Pergunte novamente mais tarde!', 'Tudo aponta que sim!', 'Sim!', 'Não!', 'Talvez!', 'Pergunte novamente mais tarde!', 'Tudo aponta que sim!', 'Sim!', 'Não!', 'Talvez!', 'Pergunte novamente mais tarde!', 'Tudo aponta que sim!'
];

function resposta() {
    var respSelect = random(opcoes);
    respArea.style.opacity = 1;
    respArea.innerHTML = respSelect;
}