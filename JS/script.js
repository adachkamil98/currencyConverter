{
  console.log("Hello World!!!");

const formElement = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");
const inputElement = document.querySelector(".js-inputValue");
const currencyUnit = document.querySelector(".js-currency");

const exchangeRates = {
  USD: 4.4153,
  EUR: 4.6886,
  GBP: 5.3926,
  JPY: 3.2436,
  AUD: 2.9666,
  CAD: 3.2354,
  CHF: 4.7453,
  UAH: 0.1258,
  SEK: 0.4266,
  NZD: 2.8232,
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = +inputElement.value;
  const currency = currencyUnit.value;
  const result = amount / exchangeRates[currency];

  resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
}
