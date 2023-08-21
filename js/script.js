let totalPriceField = document.getElementById("total-price");
let discountField = document.getElementById("discount");
let subTotalField = document.getElementById("total");
let makePurchaseBtn = document.getElementById("make-purchase");
let applyBtn = document.getElementById("apply");
let couponTextField = document.getElementById("coupon-field");
let productListField = document.getElementById("product-list");

function getTextFieldById(elementId) {
  const elementText = document.getElementById(elementId).innerText;
  return elementText;
}

let total = 0;
function setTotalPrice(price) {
  total = total + price;
  totalPriceField.innerText = total.toFixed(2);

  if (totalPriceField.innerText > 0) {
    makePurchaseBtn.removeAttribute("disabled");
  }
  if (totalPriceField.innerText >= 200) {
    applyBtn.removeAttribute("disabled");

    applyBtn.addEventListener("click", function () {
      const couponTextFieldValue = couponTextField.value;
      if (couponTextFieldValue === "SELL200") {
        const totalPrice = parseFloat(totalPriceField.innerText);
        discountField.innerText = ((totalPrice * 20) / 100).toFixed(2);
        subTotalField.innerText = (
          parseFloat(totalPriceField.innerText) -
          parseFloat(discountField.innerText)
        ).toFixed(2);
      }
    });
  }

  subTotalField.innerText = (
    parseFloat(totalPriceField.innerText) - parseFloat(discountField.innerText)
  ).toFixed(2);
}

function setProductNameToCart(name) {
  const counter = productListField.childElementCount;

  //   <h2 class="text-xl font-[500] mb-2"></h2>;
  const h2 = document.createElement("h2");
  h2.classList.add("text-xl", "font-[500]", "mb-2");
  h2.innerText = counter + 1 + ". " + name;
  productListField.appendChild(h2);
}

function promoCodeBtn() {
  couponTextField.value = "SELL200";
}

function goHome() {
  productListField.innerHTML = "";
  total = 0;
  totalPriceField.innerText = "0.00";
  discountField.innerText = "0.00";
  subTotalField.innerText = "0.00";
  makePurchaseBtn.setAttribute("disabled", "");
  applyBtn.setAttribute("disabled", "");
  couponTextField.value = "";
}

document.getElementById("product1").addEventListener("click", function (event) {
  const name = getTextFieldById("product1-name");
  const price = getTextFieldById("product1-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product2").addEventListener("click", function (event) {
  const name = getTextFieldById("product2-name");
  const price = getTextFieldById("product2-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product3").addEventListener("click", function (event) {
  const name = getTextFieldById("product3-name");
  const price = getTextFieldById("product3-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product4").addEventListener("click", function (event) {
  const name = getTextFieldById("product4-name");
  const price = getTextFieldById("product4-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product5").addEventListener("click", function (event) {
  const name = getTextFieldById("product5-name");
  const price = getTextFieldById("product5-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product6").addEventListener("click", function (event) {
  const name = getTextFieldById("product6-name");
  const price = getTextFieldById("product6-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product7").addEventListener("click", function (event) {
  const name = getTextFieldById("product7-name");
  const price = getTextFieldById("product7-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product8").addEventListener("click", function (event) {
  const name = getTextFieldById("product8-name");
  const price = getTextFieldById("product8-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
document.getElementById("product9").addEventListener("click", function (event) {
  const name = getTextFieldById("product9-name");
  const price = getTextFieldById("product9-price");
  setTotalPrice(parseFloat(price));
  setProductNameToCart(name);
});
