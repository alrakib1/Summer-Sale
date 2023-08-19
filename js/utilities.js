//Get Single Product Price
function getElementPriceById(elementId){
    const priceText = document.getElementById(elementId);
    const priceString = priceText.innerText;
    const price = parseFloat(priceString);
    return price;
}

// Make Purchase Button enable/disable

// get innerText
function getInnerTextById(elementId){
    const element = document.getElementById(elementId).innerText;
    return element;
}

// add product name to cart section
function addToCartName (ProductName){
const calculationEntry = document.getElementById('product-list');
const count = calculationEntry.childElementCount;
const p = document.createElement('p');
p.innerHTML = `${count +1}. ${ProductName}`;
calculationEntry.appendChild(p);
}

// set innerText 
function setInnerTextById(elementId,value){
    const text = document.getElementById(elementId);
    text.innerText = value;
}