// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("plate.js is loaded!");
$(function() {
  $(".pick-up").on("click", function(event) {
    var id = $(this).data("id");
    // var devours = $(this).data("devoured");

    var devoursState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/sushi/" + id, {
      type: "PUT",
      data: devoursState
    }).then(
      function() {
        console.log("changed devoured to", devours);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newRoll = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/sushi", {
      type: "POST",
      data: newRoll
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});