function startsWithHello() {
    const zin = prompt('Geef een zin in.');
    const beginZin = zin.substring(0, 5);

    let resultaat;
    if (beginZin === "Hallo") {
        resultaat = zin;
    } else {
        let eersteLetter = zin.charAt(0);
        let tweedeDeel = zin.substring(1);
        // 

        resultaat = `Hallo, ${eersteLetter}${tweedeDeel}`;
    }

    return resultaat;
}

console.log(startsWithHello());


