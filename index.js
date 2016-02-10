require("reflect-metadata");
var ng = require("angular2");


var Controller = require("infrastructure/lib/client/Controller");
var helpers = require("infrastructure/lib/helpers");

// init(options: Object, cb: Function){
//   if(!document.body){ window.onload = () =>  this.init(options, cb); return; }

//   helpers.chain([
//     (cb: Function) => {
//       console.log("Chain 1", this);
//       cb();
//     },

//     (cb: Function) => {
//       // MyClassDebug
//       @Component({
//         selector: "my-selector",
//         template: "<h1>My template</h1>"
//       });
//       class MyClass{
//         initialize(){
//           console.log("something")
//         }
//       }

//     }


//   ])(cb);

// }


module.exports = Controller.extend("Anfular2AppController", {
  init: function(options, cb){
     helpers.chain([
      function(cb){
        if(this.Layout) ng.platform.browser.bootstrap(this.Layout);
        cb();
      }


    ])(cb, this);
  }
});