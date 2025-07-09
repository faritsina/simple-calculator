
function addNumbers(num1, num2) {
  return num1 + num2;
}


function calculateSum() {
  
  const firstInput = document.getElementById("firstNumber");
  const secondInput = document.getElementById("secondNumber");
  const resultDiv = document.getElementById("result");
  const resultValue = document.getElementById("resultValue");
  const errorDiv = document.getElementById("error");


  const firstNumber = parseFloat(firstInput.value);
  const secondNumber = parseFloat(secondInput.value);

  
  resultDiv.classList.add("hidden");
  errorDiv.classList.add("hidden");

 
  if (
    isNaN(firstNumber) ||
    isNaN(secondNumber) ||
    firstInput.value === "" ||
    secondInput.value === ""
  ) {
   
    errorDiv.classList.remove("hidden");
    return;
  }

  
  const sum = addNumbers(firstNumber, secondNumber);

 
  resultValue.textContent = sum;
  resultDiv.classList.remove("hidden");

  
  resultDiv.style.opacity = "0";
  setTimeout(() => {
    resultDiv.style.opacity = "1";
  }, 100);
}

function clearCalculator() {

  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";


  document.getElementById("result").classList.add("hidden");
  document.getElementById("error").classList.add("hidden");


  document.getElementById("firstNumber").focus();
}


document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateSum();
  }
});


window.addEventListener("load", function () {
  document.getElementById("firstNumber").focus();
});
