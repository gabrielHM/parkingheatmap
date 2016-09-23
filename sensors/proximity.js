var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();
module.exports = function(){



dweetio.dweet_for("cobito-hackathon-uprm", {parkingsAvailable: 350}, function(err, dweet){

    console.log(dweet.thing); // "my-thing"
    console.log(dweet.content); // The content of the dweet
    console.log(dweet.created); // The create date of the dweet

});

};
