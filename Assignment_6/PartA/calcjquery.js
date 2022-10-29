$(document).ready(function() {
  $('#name').html(localStorage.getItem("name"));
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const number3 = parseInt($("#input3").val());
    const operator = $("input:radio[name=operator]:checked").val();
    if($.isNumeric(number1) === false || $.isNumeric(number2) === false || $.isNumeric(number3) === false) alert("Please Enter numbers");
    //if(number1 === "" || number2 === "") alert("Please Enter number");
    let result;
    if (operator === "add +") {
      result = number1+number2+number3;
    } else if (operator === "subtract -") {
      result = number1-number2-number3;
    } else if (operator === "multiply *") {
      result = number1*number2*number3;
    } else if (operator === "divide /") {
      result = number1/number2/number3;
    }
    
   $('#output').val(result);
  console.log(result);
  });
});