
document.getElementById('weight-calculator').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get user input values
  const gender = document.getElementById('gender').value;
  const height = parseInt(document.getElementById('height').value);
  const age = parseInt(document.getElementById('age').value);
  const currentWeight = parseInt(document.getElementById('currentWeight').value);
  
  // Calculate weight
  let weightDefault, weightBrocca, weightBroccaNew, weightLorentz, weightCooper, weightShulgin;
  let constBrocca, constCooper1, constCooper2, constShulgin1, constShulgin2;

  switch (gender) {
    case "male": 
      constBrocca = 100;
      constCooper1 = 4.0; constCooper2 = 128;
      constShulgin1 = 0.75; constShulgin2 = 4; 
      break;
    case "female":  
      constBrocca = 110;
      constCooper1 = 3.5; constCooper2 = 108;
      constShulgin1 = 0.32; constShulgin2 = 5; 
      break;
  }

  weightDefault = (height - 100 + age / 10) * 0.9;
  weightBrocca = height - constBrocca; // Brocca
  weightBroccaNew = weightBrocca * 1.15; // New Brocca
  weightLorentz = (height - 100) - (height - 150) / 2; // Lorentz
  weightCooper =  (height * constCooper1 / 2.54 - constCooper2) * 0.453; // Cooper
  weightShulgin =  50 + (height - 150) * constShulgin1 + (age - 21) / constShulgin2; // Shulgin

  const arr = [weightDefault, weightBrocca, weightBroccaNew, weightLorentz, weightCooper, weightShulgin] 
  const positiveArray = arr.filter(el => el > 0); 

  let average = positiveArray.reduce((acc, el) => {
    if (el > 0) { acc += el }
    return acc
  }) / positiveArray.length
  
  // Display the result
  let result = `Your ideal weight: ${average.toFixed(1)} kg\n\n`
  if (weightDefault.toFixed(1) > 0) { result += `Standard Formula: ${weightDefault.toFixed(1)} kg\n` }
  if (weightBrocca.toFixed(1) > 0) { result += `Brocca's Formula: ${weightBrocca.toFixed(1)} kg\n` }
  if (weightBroccaNew.toFixed(1) > 0) { result += `Brocca's New Formula: ${weightBroccaNew.toFixed(1)} kg\n` }
  if (weightLorentz.toFixed(1) > 0) { result += `Lorentz's Formula: ${weightLorentz.toFixed(1)} kg\n` }
  if (weightCooper.toFixed(1) > 0) { result += `Cooper's Formula: ${weightCooper.toFixed(1)} kg\n` }
  if (weightShulgin.toFixed(1) > 0) { result += `Shulgin's Formula: ${weightShulgin.toFixed(1)} kg\n` }
  
 
      
  document.getElementById('result').innerText = result;
  document.getElementById('response').innerHTML = `
  <div class="response">
  </div>`
  // document.getElementById('result').innerText = 'Your ideal weight: ' + weight.toFixed(1) + ' kilogram';
});


const err = document.createElement('div');

// Restriction to enter only numbers (from min to max) for the fields
const inputVal = (event, min, max, text) => {
  const value = event.target.value;
  event.target.value = value.replace(/\D/g, ""); // Delete all characters except numbers
  if (value < min || value > max) { 
    err.innerHTML = `<i class='error'>${text} must be between ${min} and ${max}</i>`
    event.target.parentNode.append(err)
  } else {
    err.remove()
  }
}

const heightInput = document.getElementById("height");
const ageInput = document.getElementById("age");
const currentWeightInput = document.getElementById("currentWeight");

heightInput.addEventListener("input", e => inputVal(e, 40, 260, 'Height'));
ageInput.addEventListener("input", e => inputVal(e, 1, 130, 'Age'));
currentWeightInput.addEventListener("input", e => inputVal(e, 1, 640, 'Weight'));