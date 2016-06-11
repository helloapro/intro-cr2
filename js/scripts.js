$(function() {
  $(form#city-survey).submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var protein = parseInt($("#protein")val());
    var memory = parseInt($("#memory")val());
    var alt-mind = parseInt($("#alt-mind")val());
    var climate = parseInt($("#climate")val());
    var disney = parseInt($("#disney")val());
    var sum = protein+memory+alt-mind+climate+disney
    var city;

    if ((sum/15) <= 1.5) {
      city = "Cairo";
    } else if ((sum/15) <= 2.5) {
      city = "Chile";
    } else if ((sum/15) <= 3.5) {
      city = "Shanghai";
    } else if ((sum/15) <= 4.5) {
      city = "Berlin";
    } else {
      city = "Australia";
    }

    $("#name").text(name);
    $("#city").text(city);
    $("#city-result").show();
  });
});
