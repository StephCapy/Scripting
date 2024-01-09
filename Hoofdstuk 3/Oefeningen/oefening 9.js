let user = parseInt(prompt('Geef een getal tussen 1 en 10 in'));
while (user < 1 || user > 10){
    user = parseInt(prompt('Niet mogelijk'));
}

const getal = document.getElementById('paragraaf');
    for (let i = 0; i > 10; i++) {
        getal.innerText += i + 'x' + getal + '\n';

}
