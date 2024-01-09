function alleWoordenStartenMetHoofdletter(zin){
    let woorden = zin.split(' ')

    let zin2 = '';
    for (let i = 0; i < woorden.length; i++) {
        let eersteLetter = woorden[i].charAt(0).toUpperCase();
        let tweedeDeel = woorden[i].substring(1);
        woorden[i] = eersteLetter + tweedeDeel;
        zin2 += woorden[i] + ' '
    }
    let nieuweZin = woorden.join(' ');

    document.getElementById('resultaat').innerText = nieuweZin;
}
alleWoordenStartenMetHoofdletter('Deze oefening is heel leuk');