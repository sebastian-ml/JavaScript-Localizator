const ourLocationMap = document.getElementById('our-location-map');

function initMap() {
    // The location of Uluru
    let wawelCastle = {lat: 50.0547467, lng: 19.9361073};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        ourLocationMap, {zoom: 15, center: wawelCastle});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: wawelCastle, map: map});
}
