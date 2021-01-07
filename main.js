let finalValue = document.querySelector('.result');
let button = document.querySelector('myBtn');
button.addEventListener('click', temperatureConverter);

function temperatureConverter() {
let fahrenheit = parseFloat(document.querySelector('#inputFahrenheit').value);
    //store the value to a variable up to 2 decimal
    let result = (fahrenheit - 32) / 1.8;
    //add result to the page
    finalValue.innerHTML = result;
}