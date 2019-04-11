var orm = require("../config/orm.js");

console.log("sushi.js loaded!")
var tabemono = {
    all: function(cb) {
      console.log("sushi.js triggered")
      orm.all("sushi", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("sushi", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(cols, condition, cb) {
      orm.update("sushi", cols, condition, function(res) {
        cb(res);
      });
    },
    delete: function(cols, condition, cb) {
      orm.delete("sushi", cols, condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = tabemono;