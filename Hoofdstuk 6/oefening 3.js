const pRed = document.getElementById('red');
pRed.style.color = 'darkred';
const parent = document.getElementById('main');
const childToRemove = document.getElementById('weg');
parent.removeChild(childToRemove);

// remove last paragraph, ongeacht het aantal paragraphs
const allParagraphsInMain = parent.getElementsByTagName('p');
const laatsteP = allParagraphsInMain[allParagraphsInMain.length - 1];

const header = document.getElementsByTagName('header')[0];
const h1 = document.createElement('h1');
h1.innerText = 'Welkom Pandix';
//header.appendChild(h1);
const hiervoorInserten = header.getElementsByClassName('hiervoor')[0];
header.insertBefore(h1,hiervoorInserten);

const aside = document.createElement('aside');
aside.innerText = "Elfde-liniestraat 24 3500 Hasselt";
mainParent.appendChild(aside);