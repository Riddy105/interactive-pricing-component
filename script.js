`use strict`;
const checkboxEl = document.querySelector(`.checkbox`);
const priceEl = document.querySelector(`.price`);
const viewEl = document.querySelector(`.amount-of-views`);
const sliderEl = document.querySelector(`.slider`);
const toggleContainer = document.querySelector(`.switch`);
const viewArray = [`10k`, `50k`, `100k`, `500k`, `1M`];
const priceArray = [8, 12, 16, 24, 36];

let price = priceEl.textContent;
sliderEl.addEventListener(`input`, (e) => {
  viewArray.forEach((view, index) => {
    if (e.target.value == index + 1) {
      viewEl.textContent = view;
      priceEl.textContent = priceArray[index].toFixed(2);
      price = priceEl.textContent;
    }
    if (checkboxEl.checked) {
      let yearlyDiscount = price - 0.25 * price;
      priceEl.textContent = yearlyDiscount.toFixed(2);
    }
  });
});

checkboxEl.addEventListener(`input`, (e) => {
  toggleContainer.classList.toggle(`toggle-active`);
  if (e.target.checked) {
    let yearlyDiscount = price - 0.25 * price;
    priceEl.textContent = yearlyDiscount.toFixed(2);
  } else {
    priceEl.textContent = price;
  }
});
