{
  const welcome = () => {
    console.log("Hello World!")
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

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

    const inputElement = document.querySelector(".js-inputValue");
    const currencyUnit = document.querySelector(".js-currency");

    const amount = +inputElement.value;
    const currency = currencyUnit.value;
    const result = amount / exchangeRates[currency];

    updateResultText(currency, result);
  }

  const updateResultText = (currency, result) => {

    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);

    welcome();
  }

  init();
}
