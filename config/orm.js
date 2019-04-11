// Import MySQL connection.
var connection = require("../config/connection.js");
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

console.log("orm.js loaded!")
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  var orm = {
    all: function(tableInput, cb) {
      console.log("triggered");
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        console.log(result)
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO ?? (??) VALUES (?)";
  
      console.log(queryString);
  
      connection.query(queryString, [table, cols, vals], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, cols, condition, cb) {
      var queryString = "UPDATE sushi SET devoured=?? WHERE id=?";

      console.log("cols", cols);
      connection.query(queryString, [table, cols, condition], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete: function(table, cols, condition, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?";

        console.log(queryString);
        connection.query(queryString, [table, cols, condition], function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
  };

// queries to build & export

// Export the ORM object in `module.exports`
module.exports = orm;