var express = require('express');
var router = express.Router();
var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();
/* GET home page. */
router.get('/', function(req, res, next) {
  dweetio.get_latest_dweet_for("cobito-hackathon-uprm", function(err, dweet){

    var dweet = dweet[0]; // Dweet is always an array of 1
    res.render('index', { title: 'Heatmaps', available:dweet.content.parkingsAvailable, asOf:dweet.created });
    // console.log(dweet.thing); // The generated name
    // console.log(dweet.content); // The content of the dweet
    // console.log(dweet.created); // The create date of the dweet

});

});



module.exports = router;
