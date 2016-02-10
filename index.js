var Controller = require("infrastructure/lib/client/Controller");

module.exports = Controller.extend("Anfular2AppController", {
  init: function(options, cb){
    console.log("INIT ::: ");
    cb();
  }
});