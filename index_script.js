$(document).ready(function () {
  $("#media-type").on("change", function () {
    if ($(this).val() === "Séries") {
      $("#season-container").show();
    } else {
      $("#season-container").hide();
    }
  });
});
