// Twitter
!(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? "http" : "https";
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "twitter-wjs");

$(document).ready(function() {
  // smooth scrolling

  var $root = $("html, body");
  $(".navbar-nav a").click(function() {
    var href = $.attr(this, "href");
    $root.animate(
      {
        scrollTop: $(href).offset().top
      },
      500,
      function() {
        window.location.hash = href;
      }
    );
    return false;
  });

  // Tooltips
  $(function() {
    $("#item1").tooltip();
    $("#item2").tooltip();
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Contact Form
  $("#button").on("click", function() {
    var prefix = "Thank you, We will get in touch ASAP! ";
    var name = $("#name").val();
    var suffix = "Your message: ";
    var comment = $("#message").val();
    if (comment === "") {
      $("#message").css("border", "2px solid red");
    } else {
      $("#visible-comment").html(prefix + name + suffix + comment);
      $(".form-class").hide();
      $("#button").hide();
    }
    return false;
  });

  $(".form-control").focus(function() {
    $(this).css("background-color", "white");
    $(this).css("color", "green");
  });

  $("#message").on("keyup", function() {
    var charCount = $("#message").val().length;
    //here we set the length of the content of the textarea to a variable
    $("#char-count").html(charCount);
    if (charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    }
  });
});

// work section
for (var i = 0; i < works.length; ++i) {
  $("#work").append(
    "\
  <div class='col-sm'>\
    <img class='img-responsive' src='" +
      works[i] +
      "'>\
  </div>\
  "
  );
  /*$("#workrow2").append("\
    <div class='col-xs-6 col-sm-6 col-lg-3 col-xl-3'>\
     <img class='img-fluid' src='" + works[i] + "'>\
    </div>\
  ");*/
  var images = $("#work_images");
  if (i % 2 === 0) {
    $(images[i]).css("border", "2px solid DodgerBlue");
  } else {
    $(images[i]).css("border", "2px solid salmon");
  }
}
