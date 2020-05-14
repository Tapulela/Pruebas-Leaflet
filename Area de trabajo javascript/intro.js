const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var mymap = L.map('mapid').setView([-27.400426, -55.909148], 13);
L.tileLayer(tilesProvider, {
    
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);


var iconoAltaPrioridad = L.icon({
	iconUrl: 'icono.png',
	iconSize: [48,48],
	iconAnchor: [24,48],
	popupAnchor: [0,-30]
})

let marker = L.marker([-27.400426, -55.909148], {icon: iconoAltaPrioridad}).addTo(mymap).bindPopup('13 infectados recientes');

//Agregado de un circulo de zona de riesgo
var parametrosCirculo = {
	color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 400}
var circle = L.circle([-27.400426, -55.909148],parametrosCirculo).addTo(mymap);

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-55.907793045043945,
            -27.405528166046203]
    }
};	
L.geoJSON(geojsonFeature).addTo(mymap);



