// Div with the location map
const ourLocationMap = document.getElementById('our-location-map');
const form = document.getElementsByClassName('contact')[0];

// Update styles
function updateStyle() {
    // Check if elements are in the same line. If yes set the margin for the second element
    const mapContainer = ourLocationMap.parentElement.offsetHeight;
    const formContainer = form.parentElement.offsetHeight;
    if (mapContainer !== formContainer) {
        ourLocationMap.style.width = '100%';
    } else {
        ourLocationMap.style.width = 'calc(100% - 3em)';
    }

    // Set the location map height equal to the contact form
    let contactFormHeight = document.getElementsByClassName('contact')[0];
    contactFormHeight = contactFormHeight.offsetHeight;
    ourLocationMap.style.height = contactFormHeight + 'px';

    // Make the location map at the same line as the contact form
    let contactParHeight = document.getElementsByClassName('about__par')[0];
    contactParHeight = contactParHeight.offsetHeight;
    ourLocationMap.style.marginTop = contactParHeight + 'px';
}

updateStyle();
window.onresize = updateStyle; // Call the function when window is resized

// Input fields to validate
const stringInputs = [
    document.getElementById('name'),
    document.getElementById('subject'),
    document.getElementById('message'),
]
const email = document.getElementById('email');

const alertBox = document.getElementsByClassName('alert-box')[0];

// Allow form submitting only if all inputs are correctly filled
form.addEventListener('submit', (e) => {
    // True if all fields are correct
    const inputsCorrect = formValidation(stringInputs, email);
    if (! (inputsCorrect)) e.preventDefault();
})

/**
 * Check if all passed inputs are correctly filled
 *
 * @param strInputs The inputs which must be at least 1 character. Must be an array.
 * @param email The email to check if it matches the correct pattern.
 * @returns {boolean} True if all inputs are correct.
 */
function formValidation(strInputs, email) {
    let correctInputs = 0;

    // Check if the field has at least 1 character
    stringInputs.forEach((field) => {
        if (field.value.trim().length < 1) {
            setError(field);
        } else {
            cleanError(field);
            correctInputs += 1;
        }
    })

    // For an email call the function to check if the email matches the pattern
    if (! (emailIsValid(email.value))) {
        setError(email, 'Your e-mail is invalid.');
    } else {
        cleanError(email);
        correctInputs += 1;
    }

    // Return true only if all fields are correctly filled
    if (correctInputs === strInputs.length + 1) return true;
}

/**
 * Mark the field with an error if it is incorrectly filled
 *
 * @param input The input field to mark with an error.
 * @param message The error to display. Must be a string.
 */
function setError(input, message='At least one character is required.') {
    if (input.classList.contains('contact__input--error')) {
        // Do nothing if the input is already marked with error
    } else {
        // Change the style of the input field
        input.classList.add('contact__input--error');

        // Create a new paragraph with error message and append it below the input field
        const warningPar = document.createElement('p');
        warningPar.className = 'contact__warning-message';
        warningPar.textContent = message;

        const parentName = input.parentElement;
        parentName.appendChild(warningPar);
    }
}

// Remove the error if the field is filled correctly
function cleanError(input) {
    input.classList.remove('contact__input--error');
    const inputParent = input.parentElement;
    if (inputParent.querySelector('.contact__warning-message') != null) {
        inputParent.getElementsByClassName('contact__warning-message')[0].remove();
    }
}

// Check if the email matches the pattern
function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
