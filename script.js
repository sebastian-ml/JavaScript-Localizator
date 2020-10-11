// HTML tag with a pending gif
const figure = document.getElementsByClassName('figure')[0];

const mapContainer = document.getElementById('map');
const btn = document.getElementsByClassName('btn')[0];

// Initialize and add the map
function initMap(position) {
    // Hide the pending gif
    figure.style.display = 'none';

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
    mapContainer.style.display = 'block'; // Show the map on the site
}

// Change style if user has denied location share
function locationDenied() {
    figure.style.display = 'none';
    btn.style.display = 'block';
    alertBox.style.display = 'flex';
    alertBox.style.opacity = '1';
}

// Check if the user accept location prompt and draw a map or show a warning if not
function drawUserPosition() {
    // Check if the user has geolocation
    if('geolocation' in navigator) {
        let getUserPosition = new Promise(function(resolve, reject) {
            btn.style.display = 'none';
            figure.style.display = 'flex';
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })

        getUserPosition
            .then(initMap)
            .catch(locationDenied)
    } else {
        alert('There is no geolocation in your device');
    }
}

btn.addEventListener('click', drawUserPosition);

const alertBox = document.getElementsByClassName('alert-box')[0];
const alertBoxExit = alertBox.getElementsByClassName('exit-shape')[0];
alertBoxExit.addEventListener('click', HideBox);

// Hide the box if user clicks the exit button
function HideBox() {
    // Opacity transition is set to 600ms in css
    alertBox.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(() => {
        alertBox.style.display = "none";
        }, 600);
}
