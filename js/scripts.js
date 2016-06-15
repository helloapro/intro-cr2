$(function() {
  $("form#city-survey").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var protein = parseInt($("#protein").val());
    var memory = parseInt($("#memory").val());
    var altmind = parseInt($("#altmind").val());
    var climate = parseInt($("#climate").val());
    var disney = parseInt($("#disney").val());
    var sum = protein+memory+altmind+climate+disney
    var city;
    var asap;
    var img;

    if ( ((sum/5) <= 2.6) && (climate === 1) ) {
      city = "Cairo";
      asap = "في أقرب وقت ممكن";
      $("#cairo-img").fadeToggle();
    } else if ( ((sum/5) <= 3.2) && (climate === 2) ) {
      city = "Ecuador";
      asap = "con rapidez";
      $("#ecuador-img").fadeToggle();
    } else if ( (((sum/5) <= 3.8) && (climate === 3)) || (protein === 3) ) {
      city = "Shanghai";
      asap = "尽快地";
      $("#shanghai-img").fadeToggle();
    } else if ( ((sum/5) <= 4.4) && ((disney !== 5) || (disney !== 3)) ) {
      city = "Copenhagen";
      asap = "så hurtigt som muligt";
      $("#copenhagen-img").fadeToggle();
    } else {
      city = "Sydney";
      asap = "flat chat";
      $("#sydney-img").fadeToggle();
    }

    $(".name").text(name);
    $(".city").text(city);
    $(".asap").text(asap);
    $("#city-result").show();
  });
});
