let userInput = parseInt(prompt('Geef een geral in'));

if(userInput <10) {
    console.log(userInput + 'is kleiner dan 10');

    document.getElementById('resultaat')
        .innertext = userInput + 'is kleiner dan 10';
} else {
    console.log(userInput + 'is groter dan 10');

    document.getElementById('resultaat')
        .innertext = userInput + 'is groter dan 10';
}

let dag;
switch (new Date().getDay()) {
    case 0:
        dag = "zondag";
        break;
    case 1:
        dag = "maandag";
        break;
    case 2:
        dag = "dinsdag";
        break;
    case 3:
        dag = "woensdag";
        break;
    case 4:
        dag = "donderdag";
        break;
    case 5:
        dag = "vrijdag";
        break;
    case 6:
        dag = "zaterdag";
}
console.log("Vandaag zijn we " + dag + " 3");


// Vraag de gebruiker om zijn leeftijd in te geven.
// Zolang als zijn leeftijd <18: vraag opnieuw om leeftijd in te geven.

let leeftijd = parseInt(prompt('Wat is je leeftijd'));
    while (leeftijd <18){
    leeftijd = parseInt(prompt('Je bent niet oud genoeg'))
}

for (let i = 0; i < 10; i++) {
     console.log(i);
}