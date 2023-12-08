// Function to save input values, labels, and counter to Local Storage
function saveInputsToLocalStorage() {
  var inputs = document.querySelectorAll('#inputsContainer input[type="number"]');
  var inputValues = [];
  var labels = [];

  inputs.forEach(function(input) {
    inputValues.push(input.value);
    labels.push(input.previousSibling.textContent); // Save the label text
  });

  var counter = 2; // Set the counter initial value to 2
  localStorage.setItem('inputValues', JSON.stringify(inputValues));
  localStorage.setItem('labels', JSON.stringify(labels)); // Save labels to Local Storage
  localStorage.setItem('counter', counter); // Save counter to Local Storage
}

// Function to load input values, labels, and counter from Local Storage
function loadInputsFromLocalStorage() {
  var storedInputValues = localStorage.getItem('inputValues');
  var storedLabels = localStorage.getItem('labels');
  var storedCounter = localStorage.getItem('counter');

  if (storedInputValues && storedLabels && storedCounter) {
    var inputValues = JSON.parse(storedInputValues);
    var labels = JSON.parse(storedLabels);
    var counter = parseInt(storedCounter);

    var container = document.getElementById('inputsContainer');
    container.innerHTML = ''; // Clear container before appending

    for (var i = 0; i < inputValues.length; i++) {
      var label = document.createElement('label'); // Create a label
      label.textContent = labels[i]; // Set label text

      var input = document.createElement('input');
      input.setAttribute('type', 'number');
      input.setAttribute('placeholder', 'Enter something');
      input.setAttribute('min','100');
      input.setAttribute('step','100');
      input.classList.add('form-control-spesial', 'trash-rimot');
      input.value = inputValues[i];

      container.appendChild(label); // Append the label
      container.appendChild(input);
    }
  }
}

// Load input values, labels, and counter from Local Storage on page load
window.addEventListener('load', function() {
  loadInputsFromLocalStorage();
});

// Event listener for adding inputs
document.getElementById('addInputBtn').addEventListener('click', function() {
  var input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('placeholder', 'For example 1000$');
  input.setAttribute('min','100');
  input.setAttribute('step','100');
  input.classList.add('form-control-spesial', 'trash-rimot');
  

  var counter = document.querySelectorAll('#inputsContainer label').length + 2; // Calculate the counter value starting from 2
  var label = document.createElement('label'); // Create a label
  label.classList.add("form-label", "fs-7" , "mt-2")
  label.textContent = "The amount of bot " + counter;

  var container = document.getElementById('inputsContainer');
  container.appendChild(label); // Append the label
  container.appendChild(input);

  saveInputsToLocalStorage(); // Save input values, labels, and counter to Local Storage
});

// Event listener for removing inputs
document.getElementById('trash').addEventListener('click', function() {
  var container = document.getElementById('inputsContainer');
  container.removeChild(container.lastChild); // Remove input
  container.removeChild(container.lastChild); // Remove label
  saveInputsToLocalStorage(); // Save input values, labels, and counter to Local Storage
});

