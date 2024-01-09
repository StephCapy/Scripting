let lijst=['hogeschool','pxl','derde'];

const paragraph = document.getElementById('tekst');

let boodschappenlijst = [
    'brood',
    'boter',
    'choco'
]




let lengteboodschappenlijst = boodschappenlijst.length; // 3

paragraph.innerText ='De boodschappen die we nog moeten kopen zijn';
for (let i = 0; i < lengteboodschappenlijst; i++) {
paragraph.innerText += "\n" + boodschappenlijst[i]; + '';
}






// let dagenVanDeWeek = [];
//
//
//
//
//
// dagenVanDeWeek[0] = 'Maandag';
// dagenVanDeWeek[1] = 'dinsdag';
//
//
//
// let boter = boodschappenlijst[1]
//
// let zin='hogeschool PXL';
// let eersteKarakter= zin.charAt(0); // 'H'
//
// document.getElementById('tekst').innerHTML=<h1>voorbeeld</h1>;
//
// console.log('x')