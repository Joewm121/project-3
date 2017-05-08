$(document).ready(function() {
  // submit is method
  $("form#user-input").submit(function(event) {
      event.preventDefault();
      var input = parseInt($("input#number").val());
      var resultsDiv = $('#results');
      resultsDiv.empty();
      //do something with positive
      if(input > 0){
          for (var i=1;i<=input;i++)
          {
              if((i%3)===0)
              {
                  //console.log("ping");
                  resultsDiv.append('<span>ping</span><br>');
              }
              else if((i%5)===0)
              {
                  //console.log("ping");
                  resultsDiv.append('<span>pong</span><br>');
              }
              else if((i%15)===0)
              {
                  //console.log("pingpong");
                  resultsDiv.append('<span>pingpong</span><br>');
              }
              else
              {
                  //console.log(i);
                  resultsDiv.append('<span>' + i + '</span><br>');
              }
          }
      }
      //do something with negative values
      else {
          resultsDiv.append('<span>Please Enter a positive number.</span>');

      }
  });
});
