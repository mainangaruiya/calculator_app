function appendCharacter(character) {
  document.getElementById('result').value += character;
}

function deleteLastCharacter() {
  var currentResult = document.getElementById('result').value;
  document.getElementById('result').value = currentResult.slice(0, -1);
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  var result = document.getElementById('result').value;
  var calculatedResult = eval(result);

  document.getElementById('result').value = calculatedResult;
}
