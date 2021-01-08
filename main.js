var input = document.getElementById('inputFahrenheit').value;
let finalValue = document.getElementById('result');
let button = document.getElementById('myBtn');
button.addEventListener('click', temperatureConverter);

function temperatureConverter() {
  document.getElementById('inputFahrenheit').value
  valNum = parseFloat(input);
  finalValue.innerHTML = ((document.getElementById('inputFahrenheit').value-32) / 1.8);
}