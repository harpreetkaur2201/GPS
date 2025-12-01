// Replace YOUR_ACCESS_TOKEN with your MapBox public token
mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

// Callback function: Initialize Map AFTER geolocation success
function initMap(lat, lng) {
  document.getElementById("status").textContent =
    "Location found — map centered on your position.";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [lng, lat],
    zoom: 14
  });

  // Add marker
  new mapboxgl.Marker({ color: "#ff3333" })
    .setLngLat([lng, lat])
    .addTo(map);
}

// Callback for errors
function showError(error) {
  document.getElementById("status").textContent =
    "Unable to retrieve location: " + error.message;
}

// Function that retrieves device location (REQUIRED)
function getDeviceLocation(callbackSuccess, callbackError) {
  if (!navigator.geolocation) {
    callbackError({ message: "Geolocation not supported by your browser." });
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      callbackSuccess(lat, lng);
    },
    (error) => callbackError(error)
  );
}

// Get location and load map
getDeviceLocation(initMap, showError);
