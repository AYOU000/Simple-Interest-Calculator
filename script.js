function compute() {
  var principal = document.getElementById("principal").value;
  var range = document.getElementById("range").value;
  var years = document.getElementById("years").value;

  var interest = (principal * years * range) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  var amount = parseInt(principal) + parseFloat(interest);
  var result = document.getElementById("result");
  if (principal <= 0) {
    alert("Please enter a positive number!");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "If you deposit $" +
      "<mark>" +
      principal +
      "</mark>" +
      ",<br> at an interest rate of " +
      "<mark>" +
      range +
      "%" +
      "</mark>" +
      "<br> You will receive an amount of $" +
      "<mark>" +
      amount +
      "</mark>" +
      ",<br> in the year " +
      "<mark>" +
      year +
      "</mark>" +
      "<br>";
  }
}
function updateRate() {
  var rateval = document.getElementById("range").value;
  document.getElementById("rate_val").innerText = rateval;
}
