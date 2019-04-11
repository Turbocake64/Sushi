var express = require("express");

var router = express.Router();

// Import model (sushi.js) to use its database functions
console.log("controllers loaded!")
var tabemono = require("../models/sushi")

// Create all routes and set up logic w/in those routes where required
router.get("/", function (req, res) {
  tabemono.all(function (data) {
    var hbsObject = {
      sushi: data
    };
    console.log(hbsObject)
    res.render("index", hbsObject);
  })
});

// This post route will add a new sushi roll, need post function
router.post("/api/sushi", function (req, res) {
  tabemono.create(
    ["sushi_name", "devoured"],
    [req.body.sushi_name, false],
    function (result) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
});

router.put("/api/sushi/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);
  // console.log(req.params.id); 
  console.log(req.body)
  tabemono.update(
    parseInt(req.body.devoured),
    req.params.id, function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

router.delete("/api/sushi/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  sushi.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;