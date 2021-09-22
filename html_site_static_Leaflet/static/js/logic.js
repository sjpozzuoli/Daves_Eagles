// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([41.2610, -95.9376], 4);

  /* Control panel to display map layers */
  var controlLayers = L.control.layers( null, null, {
    position: "topright",
    collapsed: false
  }).addTo(map);

  // display Carto basemap tiles with light features and labels
  var light = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(light, 'OpenStreetMap.DE');

  /* Stamen colored terrain basemap tiles with labels */
  var terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
  }); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  controlLayers.addBaseLayer(terrain, 'Stamen Terrain basemap');

  // see more basemap options at https://leaflet-extras.github.io/leaflet-providers/preview/

  // Read markers data from data.csv
  $.get('data_clusters_latlong_july21.csv', function(csvString) {
    
    // Use PapaParse to convert string to array of objects
    var data = Papa.parse(csvString, {header: true, dynamicTyping: false}).data;

    // For each row in data, create a marker and add it to the map
    // For each row, columns `Latitude`, `Longitude`, and `Title` are required
    for (var i in data) {
        var row = data[i];
            function radiusInfo(x) {
        if (x <= 392) {
            return "6";
          }
          if (x > 392 && x <= 784) {
            return "4";
          }
          if (x > 784 && x <= 1176) {
            return "2";
          }
          if (x > 1176) {
            return "1";
          };
        }
        
     function getColor(a) {
      if (a == 0) {
          return "#fa4d56";
        }
        if (a == 1) {
          return "#002d9c";
        }
        if (a == 2) {
          return "#009d9a";
        }
        if (a == 3) {
          return "#a56eff";
        }
        return "#98ee00";
      }
      //console.log(getColor(row.class))
      var marker = L.circleMarker([row.latitude, row.longitude], {
        opacity: 1,
        
      }).bindPopup(row.city + ', ' + row.state);
      marker.setStyle({fillColor: getColor(row.class), color: getColor(row.class),
      radius: radiusInfo(row.hotness_rank),
      weight: 10
    })
      marker.addTo(map);
    }

  });

  map.attributionControl.setPrefix(
    'View <a href="https://github.com/HandsOnDataViz/leaflet-map-csv" target="_blank">code on GitHub</a>'
  );

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 5,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);