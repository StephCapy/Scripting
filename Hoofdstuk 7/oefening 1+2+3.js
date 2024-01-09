const h1 = document.createElement("h1");
h1.innerText = 'Oefening 1';
document.body.appendChild(h1);

const input = document.createElement('input');
input.type = 'text';
document.body.appendChild(input);

const button = document.createElement('button');
button.innerText = 'Click me';
document.body.appendChild(button);

const p = document.createElement('p');
document.body.appendChild(p);

button.addEventListener('click', handleClick);

function handleClick() {
    p.innerText = input.value;
}

// oefening 2
// function handleClick() {
//     const newP = document.createElement('p');
//     newP.innerText = input.value;
//     document.body.appendChild(newP);
//     input.value = '';
// }

// Opmerking: Shift f6

// Oefening 3
const wisButton = document.createElement('button');
wisButton.innerText = 'Wissen';
wisButton.addEventListener('click', handleWisButtonClick)
document.body.appendChild(wisButton);
let oudeString = '';

function handleClick() {
    //laatste input in span plaatsen
    //span vet en rood
    //oude string zwart + nieuwe string rood
    const span = document.createElement('span');
    span.innerText = input.value;
    span.style.color = 'red';
    span.style.fontWeight = 'bold';
    p.innerText = oudeString;
    p.appendChild(span);
    oudeString += input.value;
    input.value = '';
}
function handleWisButtonClick() {
    p.innerText = '';
    oudeString = '';
}