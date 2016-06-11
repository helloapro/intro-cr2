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

    if ( ((sum/5) <= 2.6) && (climate === 1) ) {
      city = "Cairo";
    } else if ( ((sum/5) <= 3.2) && (climate === 2) ) {
      city = "Ecuador";
    } else if ( (((sum/5) <= 3.8) && (climate === 3)) || (protein === 3) ) {
      city = "Shanghai";
    } else if ( ((sum/5) <= 4.4) && ((disney !== 5) || (disney !== 3)) ) {
      city = "Copenhagen";
    } else {
      city = "Sydney";
    }

    if (city === "Cairo") {
      asap = "في أقرب وقت ممكن";
    } else if (city === "Ecuador") {
      asap = "con rapidez";
    } else if (city === "Shanghai") {
      asap = "尽快地";
    } else if (city === "Copenhagen") {
      asap = "så hurtigt som muligt";
    } else {
      asap = "flat chat";
    }

    $(".name").text(name);
    $(".city").text(city);
    $(".asap").text(asap);
    $("#city-result").show();
  });
});
