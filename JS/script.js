console.log("Hello World!!!");

let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let inputElement = document.querySelector(".js-inputValue");
let currencyUnit = document.querySelector(".js-currency");

let USD = 4.4153;
let EUR = 4.6886;
let GBP = 5.3926;
let JPY = 3.2436;
let AUD = 2.9666;
let CAD = 3.2354;
let CHF = 4.7453;
let UAH = 0.1258;
let SEK = 0.4266;
let NZD = 2.8232;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +inputElement.value;
    let currency = currencyUnit.value;
    let result;

    switch (currency) {

        case "USD":
            result = amount / USD;
            break;
        case "EUR":
            result = amount / EUR;
            break;
        case "GBP":
            result = amount / GBP;
            break;
        case "JPY":
            result = amount / JPY;
            break;
        case "AUD":
            result = amount / AUD;
            break;
        case "CAD":
            result = amount / CAD;
            break;
        case "CHF":
            result = amount / CHF;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "UAH":
            result = amount / UAH;
            break;
        case "SEK":
            result = amount / SEK;
            break;
        case "NZD":
            result = amount / NZD;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;

});