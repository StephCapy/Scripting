let prive = {
    naam: 'Stephanie',
    voornaam: 'Cloots',
    telefoonnummer: '0478628864',
    alles: function (){
        return `Naam: ${this.naam}, 
        voornaam: ${this.voornaam}, 
        telefoonnummer: ${this.telefoonnummer}`;
    }, voluit: function (){ return `
    Naam ${this.naam}, voornaam: ${this.voornaam}, telefoonnummer: ${this.telefoonnummer}`;
    }
};

let newParagraph = document.createElement('p');
newParagraph.innerText = prive.alles() + prive.voluit();
document.body.appendChild(newParagraph);

console.log(prive.alles())