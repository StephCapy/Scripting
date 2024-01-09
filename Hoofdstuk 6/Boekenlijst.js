const boeken = [
    {
        titel: 'The theory of everything',
        auteur: 'Stephen Hawking',
        gelezen: 'ja'
    },
    {
        titel: '12 rules for life',
        auteur: 'Jordan Peterson',
        gelezen: 'ja'
    },
];
const ul = document.getElementsByTagName('ul')

const nogNietGlezenBoeken = boeken
    .filter((boek)=> {
        return boek.gelezen === 'Nee'
    });
boeken.forEach((boek)=>{
    const li = document.createElement('li');
    li.innerText = `${boek.titel} van ${boek.auteur}, gelezen: ${boek.gelezen}`
    ul.appendChild(li);
});


/*const ul = document.getElementsByTagName('ul')[0];
for (let i = 0; i < boeken.length; i++) {
    const huidigeBoek = boeken[i];
    const li = document.createElement('li');
    li.innerText = `${huidigeBoek.titel} van ${huidigeBoek.auteur}, gelezen ${huidigeBoek.gelezen}`;
    ul.appendChild(li);
}*/