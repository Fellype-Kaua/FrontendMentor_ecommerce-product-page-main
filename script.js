var mainProduct = document.getElementById('productImg');
var firstProduct = document.getElementById('product1');
var secondProduct = document.getElementById('product2');
var thirdProduct = document.getElementById('product3');
var fourthProduct = document.getElementById('product4');

function product1() {
    firstProduct.style.border = 'solid #ff7d1a';
    firstProduct.style.opacity = '0.5';
    mainProduct.src = "./images/image-product-1.jpg"

    secondProduct.style.border = 'none'
    secondProduct.style.opacity = '1';

    thirdProduct.style.border = 'none'
    thirdProduct.style.opacity = '1';

    fourthProduct.style.border = 'none'
    fourthProduct.style.opacity = '1';
}

function product2() {
    secondProduct.style.border = 'solid #ff7d1a';
    secondProduct.style.opacity = '0.5';
    mainProduct.src = "./images/image-product-2.jpg"

    firstProduct.style.border = 'none'
    firstProduct.style.opacity = '1';

    thirdProduct.style.border = 'none'
    thirdProduct.style.opacity = '1';

    fourthProduct.style.border = 'none'
    fourthProduct.style.opacity = '1';
}

function product3() {
    thirdProduct.style.border = 'solid #ff7d1a';
    thirdProduct.style.opacity = '0.5';
    mainProduct.src = "./images/image-product-3.jpg"

    firstProduct.style.border = 'none'
    firstProduct.style.opacity = '1';

    secondProduct.style.border = 'none'
    secondProduct.style.opacity = '1';

    fourthProduct.style.border = 'none'
    fourthProduct.style.opacity = '1';
}

function product4() {
    fourthProduct.style.border = 'solid #ff7d1a';
    fourthProduct.style.opacity = '0.5';
    mainProduct.src = "./images/image-product-4.jpg"

    firstProduct.style.border = 'none'
    firstProduct.style.opacity = '1';

    secondProduct.style.border = 'none'
    secondProduct.style.opacity = '1';

    thirdProduct.style.border = 'none'
    thirdhProduct.style.opacity = '1';
}