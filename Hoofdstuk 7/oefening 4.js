const h1Elements = document.getElementsByTagName('h1');
const pElements = document.getElementsByTagName('p');

const kleiner = document.getElementsByTagName('button')[0];
const groter = document.getElementsByTagName('button')[1];
kleiner.addEventListener('click', function (){
    handleFontResize('kleiner')
});
groter.addEventListener('click',  function (){
    handleFontResize('groter')
});

function handleFontResize(size){
    if (size === 'kleiner'){
        h1Size = '22px';
        pSize = '14px';
    } else{
        h1Size = '48px'
        pSize = '24px'
    }
    changeFontSizeOfElements(h1Elements, h1Size)
    changeFontSizeOfElements(pElements, pSize)

    function changeFontSizeOfElements(elements, size) {
        for (let i = 0; i < elements.length; i++) {
            const huidigeElements = elements[i];
            huidigeElements.style.fontSize = size;
        }

    }}

function changeFontSizeOfElements(elements, size) {
    for (let i = 0; i < h1Elements.length; i++) {
        const huidigeH1 = h1Elements[i];
        huidigeH1.style.fontSize = '48px';
    }
}