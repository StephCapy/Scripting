let auto = {
    merk: 'Mercedes',
    bouwjaar: 2023,
    prijs: 80000,
    voluit: function () {
        return `Merk: ${this.merk}, bouwjaar: ${this.bouwjaar}, prijs: ${this.prijs}`;
    }
};

let producten = [
    {productid: 1, naam: 'stofzuiger', prijs: 200},
    {productid: 2, naam: 'TV', prijs: 1400},
    {productid: 3, naam: 'wasrekje', prijs: 20},
    {productid: 4, naam: 'radio', prijs: 150},
];

for (let i = 0; i < producten.length; i++) {
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `Product ID: ${producten[i].productid}, Naam: ${producten[i].naam}, prijs: ${producten[i].prijs}`
    document.body.appendChild(newParagraph);
}

auto.kleur = 'rood';
auto.merk = 'ford';

console.log(auto.voluit);
console.log(auto.voluit())