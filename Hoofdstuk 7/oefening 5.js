const table = document.createElement('table');
const tr = document.createElement('tr');
table.appendChild(tr);

for (let i = 1; i < 24; i++) {
    const td = document.createElement('td');
    td.innerText = i;
    td.addEventListener('click', handleAdventCellClick);
    tr.appendChild(td);
}

document.body.appendChild(table);

function handleAdventCellClick(event) {
    event.target.innerText = 'Een leuke spreuk';
    console.log(event);
}