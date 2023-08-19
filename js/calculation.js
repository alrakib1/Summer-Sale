let total = 0;

// product-1
document.getElementById("card-1").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-1-name");
  addToCartName(ProductName);
  const Product1Price = getElementPriceById("card1-price");
  total = total + Product1Price;
  setInnerTextById("total-price", total.toFixed(2));
  

  if (Product1Price > 0 && total > 200) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
    const discountButton = document.getElementById("apply-button");
    const remove = discountButton.classList.remove("btn-disabled");
    const add = discountButton.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
  if (Product1Price > 0) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
});

// product-2

document.getElementById("card-2").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-2-name");
  addToCartName(ProductName);
  const Product2Price = getElementPriceById("card2-price");
  total = total + Product2Price;
  setInnerTextById("total-price", total.toFixed(2));
  

  if (Product2Price > 0 && total > 200) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
    const discountButton = document.getElementById("apply-button");
    const remove = discountButton.classList.remove("btn-disabled");
    const add = discountButton.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
  if (Product2Price > 0) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
});

// product-3

document.getElementById("card-3").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-3-name");
  addToCartName(ProductName);
  const Product3Price = getElementPriceById("card3-price");
  total = total + Product3Price;
  setInnerTextById("total-price", total.toFixed(2));
  

  if (Product3Price > 0 && total > 200) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
    const discountButton = document.getElementById("apply-button");
    const remove = discountButton.classList.remove("btn-disabled");
    const add = discountButton.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
  if (Product3Price > 0) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
});
// product-4

document.getElementById("card-4").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-4-name");
  addToCartName(ProductName);
  const Product4Price = getElementPriceById("card4-price");
  total = total + Product4Price;
  setInnerTextById("total-price", total.toFixed(2));
  

  if (Product4Price > 0 && total > 200) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
    const discountButton = document.getElementById("apply-button");
    const remove = discountButton.classList.remove("btn-disabled");
    const add = discountButton.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
  if (Product4Price > 0) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E547B2]",
      "text-white",
      "border-none"
    );
  }
});
// product-5

document.getElementById("card-5").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-5-name");
  addToCartName(ProductName);
  const Product5Price = getElementPriceById("card5-price");
  total = total + Product5Price;
  setInnerTextById("total-price", total.toFixed(2));
  
  if (Product5Price > 0 && total > 200) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
    const discountButton = document.getElementById("apply-button");
    const remove = discountButton.classList.remove("btn-disabled");
    const add = discountButton.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
  if (Product5Price > 0) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
});
// product-6

document.getElementById("card-6").addEventListener("click", function () {
  const ProductName = getInnerTextById("product-6-name");
  addToCartName(ProductName);
  const Product6Price = getElementPriceById("card6-price");
  total = total + Product6Price;
  setInnerTextById("total-price", total.toFixed(2));
  

  if (Product6Price > 0 && total > 200) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
    const discountButton = document.getElementById("apply-button");
    const remove = discountButton.classList.remove("btn-disabled");
    const add = discountButton.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
  if (Product6Price > 0) {
    const purchase = document.getElementById("make-purchase");
    const removeList = purchase.classList.remove("btn-disabled");
    const purchaseNew = purchase.classList.add(
      "btn-primary",
      "bg-[#E527B2]",
      "text-white",
      "border-none"
    );
  }
});
// discount calculation
document.getElementById("apply-button").addEventListener("click", function () {
  const inputText = document.getElementById("coupon-input");
  const inputTextString = inputText.value;
  inputText.value = "";
  if (inputTextString !== "SELL200") {
    alert("Please write correct coupon code: SELL200");
  }
  const discount = (total * 20) / 100;
  const discountF = discount.toFixed(2);
  setInnerTextById("total-discount", discountF);
  const discountedPrice = total - discount;

  const discountFinal = discountedPrice.toFixed(2);
  console.log(discountFinal)
  setInnerTextById("final-cost", discountFinal);
});
