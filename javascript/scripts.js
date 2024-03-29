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
  $("#item1").tooltip({
    container: "body"
  });
  $("#item2").tooltip();
  $('[data-toggle="tooltip"]').tooltip();
  console.log("Add tips");

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

  // Google Map within contact section

  // work section
  for (var i = 0; i < works.length; ++i) {
    $("#portfolio-2-images").append(
      "\
    <div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>\
      <a href='" +
        works[i].url +
        "'\
        class='work-img'>\
        <img class='img-fluid' src='" +
        works[i].pic +
        "'>\
        <span class='info'>\
          <p class='proj-title'>Title:" +
        works[i].title +
        "</p>\
        </span>\
      </a>\
    </div>\
  "
    );
  }

  $(".work-img")
    .mouseenter(function() {
      $(".info", this).show();
    })
    .mouseleave(function() {
      $(".info", this).hide();
    });
});

function initMap() {
  /*var myLatLng = { lat: 50.115126, lng: 8.538058 };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 6
  });
  // The marker, positioned in FRA-Hoechst
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Frankfurt-Hoechst" */
  var myLatlng = new google.maps.LatLng(50.115126, 8.538058);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">My Home Office</h3>' +
    '<div id="bodyContent">' +
    "<p>I live and work here</p>" +
    "</div>" +
    "</div>";

  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  var image = "img/custom-marker.png";

  var marker = new google.maps.Marker({
    position: myLatlng,
    title: "My office",
    animation: google.maps.Animation.DROP,
    icon: image
  });

  // To add the marker to the map, call setMap();
  marker.setMap(map);

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
    toggleBounce();
  });

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
