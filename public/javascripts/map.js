var map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 18.210557, lng: -67.140767},
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map
  });
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  var hardCodedLocations = [];
  //Area Blanca 1 Simulated Parking Spots
  for (var lat=0;lat<50;lat++){
    for(var lon=0;lon<100;lon++){
      var gmap = new google.maps.LatLng((18.210975+(lat/100000)),(-67.1423185-((lon)/100000)));
      hardCodedLocations.push(gmap);
    }
  }
  //Area Blanca 2 Simulated Parking Spots
  for (var lat=0;lat<20;lat++){
    for(var lon=0;lon<100;lon++){
      var gmap = new google.maps.LatLng((18.211408+(lat/100000)),(-67.142210-((lon)/100000)));
      hardCodedLocations.push(gmap);
    }
  }

  //El Town Simulated Parking Spots
  for (var lat=0;lat<20;lat++){
    for(var lon=0;lon<200;lon++){
      var gmap = new google.maps.LatLng((18.209857+(lat/100000)),(-67.143868-((lon)/100000)));
      hardCodedLocations.push(gmap);
    }
  }

  //Parque Proceres Simulated Parking Spots

    for(var lat=0;lat<30;lat++){
      var gmap = new google.maps.LatLng((18.206142-(lat/9000)),-67.137203);
      hardCodedLocations.push(gmap);
    }


  return hardCodedLocations;

}
