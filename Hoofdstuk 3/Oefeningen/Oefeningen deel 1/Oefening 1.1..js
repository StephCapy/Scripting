let digital = new Array();
digital[0] = "Internet of things"
digital[1] = "Programmeren"
digital[2] = "Systemen en netwerkbeheer"
digital[3] = "Digitale vormgeving"
digital[4] = "Bachelor Multimedia- en Communicatietechnologie"

console.log(digital)

// const aantalOpleidingen = digital.length;
//
// console.log("Het aantal opleidingen op het departement PXL-DIGITAL is: " + aantalOpleidingen);

const paragraaf = document.getElementById("tekst");
let digital2 = [
    "Internet of things",
    "Programmeren",
    "Systemen en netwerkbeheer",
    "Digitale vormgeving",
    "Bachelor Multimedia- en Communicatietechnologie",
]
let lengtedigital= digital2.length;
paragraaf.innerText = "Dit zijn de opleidingen: ";
for (let i = 0; i < lengtedigital; i++) {
    paragraaf.innerText += "\n" + digital2[i] + "  ";
}