'use strict';
 
mapboxgl.accessToken = "pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw";
 
let map = new mapboxgl.Map({

    container: "map",

    style: "mapbox://styles/mapbox/streets-v11",

    center: [0, 0],

    zoom: 15

});
 
let marker = new mapboxgl.Marker({ color: "#ff7342" });
 
let options = {

    enableHighAccuracy: true

};
 
function getLocation(position) {

    let lat = position.coords.latitude;

    let lng = position.coords.longitude;
 
    map.setCenter([lng, lat]);

    marker.setLngLat([lng, lat]).addTo(map);
 
    document.getElementById("status").textContent = "Location found.";
 

    document.getElementById("mapContent").style.display = "none";
 

    document.getElementById("trackBtn").style.display = "none";

}
 
function errorHandler() {

    document.getElementById("status").textContent = "Unable to get your location.";

}
 
function displayPosition() {

    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(getLocation, errorHandler, options);

    } else {

        document.getElementById("status").textContent = "Geolocation not supported.";

    }

}
 
document.getElementById("trackBtn").addEventListener("click", displayPosition);

 