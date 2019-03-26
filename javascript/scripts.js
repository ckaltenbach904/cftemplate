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
  $("#work-images").append(
    "\
    <div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>\
      <a href='https://www.gehbauer-schmerzweg.com/' 
      class='work-img'>\
      <img class='img-fluid' src='" +
      works[i].pic +
      "'>\
        <span class='info'><p class='proj-title'>Title:</p> [First Project]
        </span>\
      </a>\
    </div>\
  ");
}

  $(".work-img").mouseenter(function () {
    $(".info", this).show();
  }).mouseleave(function () {
    $(".info", this).hide();
  });
}
}); // End document ready