const ourLocationMap = document.getElementById('our-location-map');

// Set the location map height equal to the contact form
let contactFormHeight = document.getElementsByClassName('contact')[0];
contactFormHeight = contactFormHeight.offsetHeight;
ourLocationMap.style.height = contactFormHeight + 'px';

// Make the location map at the same line as the contact form
let contactParHeight = document.getElementsByClassName('about__par')[0];
contactParHeight = contactParHeight.offsetHeight;
ourLocationMap.style.marginTop = contactParHeight + 'px';