// make sure number is positive
function positiveNumber (input) {
  if (input >= 0) {
    return true;
  } else if (input < 0 ) {
    return false;
  }
}
console.log("ddd")














// count to number inputted by user

// replace number divislbe by 3 with ping

// repalce numbers divisible by 5 with pong

// replace numbers divivsible by 15 with pingpong


$(document).ready(function() {
  // submit is method
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val();


    var output = positiveNumber(input);

    $(results).show();
  });
});
