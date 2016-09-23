var express = require('express');
var router = express.Router();
var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();
/* GET home page. */
router.get('/', function(req, res, next) {
  dweetio.get_all_dweets_for("cobito-hackathon-uprm", function(err, dweets){
    res.json(dweets);
      // // Dweets is an array of dweets
      // for(theDweet in dweets)
      // {
      //     var dweet = dweets[theDweet];
      //
      //     console.log(dweet.thing); // The generated name
      //     console.log(dweet.content); // The content of the dweet
      //     console.log(dweet.created); // The create date of the dweet
      // }

  });
});

router.post('/', function(req, res, next) {

  dweetio.get_latest_dweet_for("cobito-hackathon-uprm", function(err, dweet){

    var dweet = dweet[0]; // Dweet is always an array of 1
    var available = dweet.content.parkingsAvailable - 1;
    dweetio.dweet_for("cobito-hackathon-uprm", {parkingsAvailable: available}, function(err, dweet){
        res.json(dweet);
        console.log(dweet.thing); // "my-thing"
        console.log(dweet.content); // The content of the dweet
        console.log(dweet.created); // The create date of the dweet

    });

});

});



module.exports = router;
