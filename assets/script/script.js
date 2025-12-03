mapboxgl.accessToken = "pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw";

function initMap(lat, lng) {
    document.getElementById("status").textContent = "Location found.";
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: 14
    });
    new mapboxgl.Marker({ color: "#ff3333" })
        .setLngLat([lng, lat])
        .addTo(map);
}

function showError(error) {
    document.getElementById("status").textContent = "Unable to retrieve location: " + error.message;
}

function getDeviceLocation(successCallback, errorCallback) {
    if (!navigator.geolocation) {
        errorCallback({ message: "Geolocation not supported by this browser." });
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            successCallback(lat, lng);
        },
        (error) => errorCallback(error)
    );
}

getDeviceLocation(initMap, showError);
