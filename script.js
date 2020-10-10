// Initialize and add the map
function initMap(position) {
    // Get current user coordinates
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const userCoords = {lat: lat, lng: long};

    // The map, centered at user coords
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: userCoords
    });
    // The marker, positioned at user location
    const marker = new google.maps.Marker({
        position: userCoords,
        map: map
    });
    mapContainer.style.display = 'block';
}

const mapContainer = document.getElementById('map');
const btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', displayUserLocation);


function displayUserLocation() {
    btn.style.display = 'none';
    if('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(initMap,
            // Hide the button and show alert if user has denied lcoation promt
            () => {
                alert('You have to accept location prompt. Share your location and try again. \nFor help visit: https://support.google.com/chrome/answer/142065?hl=en');
                btn.style.display = 'block';
            })
    } else {
        alert('There is no geolocation in your device');
    }
}