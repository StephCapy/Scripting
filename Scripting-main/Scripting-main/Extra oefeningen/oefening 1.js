const vehicles = [
    {
        model: 'Mercedes AMG',
        license: 'B',
        odometer: 0,
        price: 240000,
        imgPath: 'mercedes-amg.jpg'
    },
    {
        model: 'Kawasaki Ninja 400',
        license: 'A',
        odometer: 11500,
        price: 5500,
        imgPath: 'kawasaki-ninja.jpg'
    },
    {
        model: 'Ford Mondeo',
        license: 'B',
        odometer: 14000,
        price: 30000,
        imgPath: 'ford-mondeo.jpeg'
    },

    {
        model: 'Ducati Panigale Superbike',
        license: 'A',
        odometer: 2499,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
    {
        model: 'Ford Fiesta ST',
        license: 'B',
        odometer: 45124,
        price: 19999,
        imgPath: 'ford-fiesta-st.jpg'
    },
    {
        model: 'Ducati Panigale Superbike 2',
        license: 'A',
        odometer: 1000,
        price: 21999,
        imgPath: 'ducati-panigale.jpg'
    },
];

const h1 = document.createElement('h1');
h1.innerText ='Car finder';
document.body.appendChild(h1);

const label = document.createElement('label');
label.innerText = 'Driving license';
label.setAttribute('for','licenses-select');

const select = document.createElement('select');
select.id = 'licenses-select';

const selectOptions = ['All', 'A', 'B'];
selectOptions.forEach((option)=>{
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.innerText = option;
    select.appendChild(optionElement);
});

document.body.appendChild(label);
document.body.appendChild(select);

const filteredVehicles = vehicles.filter((vehicle)=> {
    const selectedLicense = select.value;
    if (selectedLicense === 'All') {
        return true;
    }
        return vehicle.license.toUpperCase() === selectedLicense.toUpperCase();

});

console.log(filteredVehicles);

select.addEventListener('change',function () {
    const filteredVehicles = vehicles.filter((vehicle)=> {
        const selectedLicense = select.value;
        if (selectedLicense === 'All') {
            return true;
        }
        return vehicle.license.toUpperCase() === selectedLicense.toUpperCase();
    });
    console.log(filteredVehicles);
});


const imgMercedes = document.createElement('img');
imgMercedes.src = 'assets/mercedes-amg.jpg'
document.body.appendChild(imgMercedes);

const imgKawasaki = document.createElement('img');
imgKawasaki.src = 'assets/kawasaki-ninja.jpg'
document.body.appendChild(imgKawasaki);

const imgFordMondeo = document.createElement('img');
imgFordMondeo.src = 'assets/ford-mondeo.jpeg'
document.body.appendChild(imgFordMondeo);

const imgDucatiPanigale = document.createElement('img');
imgDucatiPanigale.src = 'assets/ducati-panigale.jpg'
document.body.appendChild(imgDucatiPanigale);

const imgFordFiesta = document.createElement('img');
imgFordFiesta.src = 'assets/ford-fiesta-st.jpg'
document.body.appendChild(imgFordFiesta);
