
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