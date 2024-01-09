let aantallijnen = 7;
let symbol = '#';
let space = '';
// let aantalSpaties = 6;

for (let i = 1; i <=aantallijnen;i++){
    let row = '';

    // for (let j = 1; j <= aantalSpaties; j++){
    //     let row= '';
    // }
    // aantalSpaties--;

    for (let j =1; j <=aantallijnen - i; j++){
        row +=' ';
    }
    for (let j = 0; j < i; j++) {
        row += symbol;
    }
console.log(row);

}