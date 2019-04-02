$(document).ready(function() {
  var lastAction = "";
  function reset() {
    $("#display").val("");
  }

  $(".operator").on("click", function() {
    // if last action was an operator then don't do anything
    if (lastAction === "operator") {
      return;
    }

    var currentDisplay = $("#display").val();
    var newDisplay =
      currentDisplay +
      $(this)
        .text()
        .trim();
    $("#display").val(newDisplay);
    lastAction = "operator";
  });

  $(".operands").on("click", function() {
    if (lastAction === "calculate") {
      reset();
    }
    lastAction = "operand";

    console.log("You clicked on ", $(this).text());
    var currentDisplay = $("#display").val();
    var newDisplay =
      currentDisplay +
      $(this)
        .text()
        .trim();
    $("#display").val(newDisplay);
  });

  $("#calculate").on("click", function() {
    // evaluate the current display string
    var currentDisplay = $("#display").val();
    console.log("current display", currentDisplay);
    var newDisplay = eval(currentDisplay);
    lastAction = "calculate";
    $("#display").val(newDisplay);
  });

  $(".clear-button").on("click", function() {
    reset();
    lastAction = "";
  });
});
