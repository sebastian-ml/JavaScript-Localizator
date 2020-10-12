const ourLocationMap = document.getElementById('our-location-map');

// Set the location map height equal to the contact form
let contactFormHeight = document.getElementsByClassName('contact')[0];
contactFormHeight = contactFormHeight.offsetHeight;
ourLocationMap.style.height = contactFormHeight + 'px';

// Make the location map at the same line as the contact form
let contactParHeight = document.getElementsByClassName('about__par')[0];
contactParHeight = contactParHeight.offsetHeight;
ourLocationMap.style.marginTop = contactParHeight + 'px';

function initMap() {
    // The location of Wawel Castle
    let wawelCastle = {lat: 50.0547467, lng: 19.9361073};
    // The map, centered at Wawel Castle
    let map = new google.maps.Map(
        ourLocationMap, {zoom: 15, center: wawelCastle});
    // The marker, positioned at Wawel Castle
    let marker = new google.maps.Marker({position: wawelCastle, map: map});
}