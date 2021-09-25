var a = document.querySelector("#a");
var b = document.querySelector("#b");
var btn = document.querySelector("#btn-hypotenuse");
var output = document.querySelector("#hypo-output");

btn.addEventListener("click", handleHypo)

function validateNumber(str) {
    return !isNaN(str) && str.trim().length > 0;
  }

  function nonZero(number) {
    return Number(number) > 0;
}

function handleHypo() {
    output.style.display = "block";
    if(validateNumber(a.value) && validateNumber(b.value) && nonZero(a.value) && nonZero(b.value)) {
        output.innerText = "Hypotenuse is " + Math.sqrt(Number(a.value)*Number(a.value) + Number(b.value)*Number(b.value)) +" cm";
    } else {
        output.innerText = "INVALID";
    }
}
