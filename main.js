var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var btnIsTriangle = document.querySelector("#btn-is-triangle");
var output = document.querySelector("#is-triangle-output");

btnIsTriangle.addEventListener("click", isTriangle);

function validateNumber(str) {
  return !isNaN(str) && str.trim().length > 0;
}

function isTriangle() {
  output.style.display = "inline-block";
  var angle1Val = angle1.value;
  var angle2Val = angle2.value;
  var angle3Val = angle3.value;
  if (
    validateNumber(angle1Val) &&
    validateNumber(angle2Val) &&
    validateNumber(angle3Val)
  ) {
    if (
      Number(angle1Val) > 0 &&
      Number(angle2Val) > 0 &&
      Number(angle3Val) > 0
    ) {
      if (Number(angle1Val) + Number(angle2Val) + Number(angle3Val) === 180) {
        output.style.color = "green";
        output.innerText = "Yayy!! They make a triangle";
      } else {
        output.style.color = "red";
        output.innerText = "Oops!! the angles don't make a triangle";
      }
    } else {
    output.innerText = "INVALID INPUT";
    }
  } else {
    output.innerText = "INVALID INPUT";
  }
}
