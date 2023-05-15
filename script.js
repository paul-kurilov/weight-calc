
document.getElementById('weight-calculator').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get user input values
  var height = parseInt(document.getElementById('height').value);
  var age = parseInt(document.getElementById('age').value);
  
  // Calculate weight
  var weight = (height - 100 + age / 10) * 0.9;
  
  // Display the result
  document.getElementById('result').innerText = 'Ваш идеальный вес: ' + weight.toFixed(1) + ' кг';
});