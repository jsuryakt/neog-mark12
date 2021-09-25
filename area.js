var base = document.querySelector("#base");
var height = document.querySelector("#height");
var btn = document.querySelector("#btn-area");
var output = document.querySelector("#area-output");

btn.addEventListener("click", handleArea)

function validateNumber(str) {
    return !isNaN(str) && str.trim().length > 0;
  }

function nonZero(number) {
    return Number(number) > 0;
}

function handleArea() {
    output.style.display = "block";
    if(validateNumber(base.value) && validateNumber(height.value) && nonZero(base.value) && nonZero(height.value)) {
        output.innerText = "area is " + 0.5*Number(base.value)*Number(height.value) +" cm²";
    } else {
        output.innerText = "INVALID";
    }
}
