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

    if ((sum/5) <= 10.8) {
      city = "Cairo";
    } else if ((sum/5) <= 10.9) {
      city = "Chile";
    } else if ((sum/5) <= 20.9) {
      city = "Shanghai";
    } else if ((sum/5) <= 30.9) {
      city = "Berlin";
    } else {
      city = "Australia";
    }

    if (city === "Cairo") {
      asap = "في أقرب وقت ممكن";
    } else if (city === "Chile") {
      asap = "con rapidez";
    } else if (city === "Berlin") {
      asap = "mach schnell";
    } else if (city === "Shanghai") {
      asap = "尽快地";
    } else {
      asap = "flat chat";
    }

    $(".name").text(name);
    $(".city").text(city);
    $(".asap").text(asap);
    $("#city-result").show();
  });
});
