$(function () {
  // exercise 1
  $("#toggleButton").click(function () {
    $("#myParagraph").toggle();
  });

  // exercise 2
  $("#colorButton").click(function () {
    $("#colorDiv").css("background-color", "yellow");
  });

  // exercise 3
  $("#addClassButton").click(function () {
    $("#classDiv").addClass("newClass");
  });
  $("#removeClassButton").click(function () {
    $("#classDiv").removeClass("newClass");
  });

  // exercise 4
  $("#fadeInButton").click(function () {
    $("#fadeDiv").fadeIn();
  });
  $("#fadeOutButton").click(function () {
    $("#fadeDiv").fadeOut();
  });

  // exercise 5
  $("#slideUpButton").click(function () {
    $("#slideDiv").slideUp();
  });
  $("#slideDownButton").click(function () {
    $("#slideDiv").slideDown();
  });
});
