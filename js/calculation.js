let total = 0;

// product-1

document.getElementById("card-1").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-1-name");
  addToCartName(ProductName);
  const ProductPrice = getElementPriceById("card1-price");
  total = total + ProductPrice;
  setInnerTextById("total-price", total.toFixed(2));
 buttonEnable(ProductPrice,total);
});

// product-2

document.getElementById("card-2").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-2-name");
  addToCartName(ProductName);
const  ProductPrice = getElementPriceById("card2-price");
  total = total + ProductPrice;
  setInnerTextById("total-price", total.toFixed(2));
buttonEnable(ProductPrice,total);
});

// product-3

document.getElementById("card-3").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-3-name");
  addToCartName(ProductName);
  const ProductPrice = getElementPriceById("card3-price");
  total = total + ProductPrice;
  setInnerTextById("total-price", total.toFixed(2));
buttonEnable(ProductPrice,total);
});

// product-4

document.getElementById("card-4").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-4-name");
  addToCartName(ProductName);
  const ProductPrice = getElementPriceById("card4-price");
  total = total + ProductPrice;
  setInnerTextById("total-price", total.toFixed(2));
buttonEnable(ProductPrice,total);
});

// product-5

document.getElementById("card-5").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-5-name");
  addToCartName(ProductName);
  const ProductPrice = getElementPriceById("card5-price");
  total = total + ProductPrice;
  setInnerTextById("total-price", total.toFixed(2));
buttonEnable(ProductPrice,total);
});

// product-6

document.getElementById("card-6").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-6-name");
  addToCartName(ProductName);
  const ProductPrice = getElementPriceById("card6-price");
  total = total + ProductPrice;
  setInnerTextById("total-price", total.toFixed(2));
buttonEnable(ProductPrice,total);
});

// discount calculation
document.getElementById("apply-button").addEventListener("click", function () {
  const inputText = document.getElementById("coupon-input");
  const inputTextString = inputText.value;
  inputText.value = "";
  if (inputTextString !== "SELL200") {
    alert("Please write correct coupon code: SELL200");
    return;
  }
  const discount = (total * 20) / 100;
  const discountF = discount.toFixed(2);
  setInnerTextById("total-discount", discountF);
  const discountedPrice = total - discount;

  const discountFinal = discountedPrice.toFixed(2);
  setInnerTextById("final-cost", discountFinal);
});
