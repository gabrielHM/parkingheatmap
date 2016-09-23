var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();
module.exports = function(){
// a = "18.212238, -67.144501"
// b = "18.212238, -67.142098"
// c = "18.211127, -67.144501"
// d = "18.211127, -67.142098"
var maxLat = 18.212238;
var minLat = 18.211127;
var maxLon = -67.142098;
var minLon = -67.144501;
var allLat = [];
var allLon = [];
for (i=minLat; i< maxLat; i= i+ 0.000001){
  allLat.push(i.toFixed(6));
}
for (j=minLon; j< maxLon; j= j+ 0.000001){
  allLon.push(j.toFixed(6));
}
console.log(allLon);
dweetio.dweet_for("cobito-hackathon-uprm-gps", {latitude:"18.207751", longitude:"-67.142220"}, function(err, dweet){

    console.log(dweet.thing); // "my-thing"
    console.log(dweet.content); // The content of the dweet
    console.log(dweet.created); // The create date of the dweet

});

};
