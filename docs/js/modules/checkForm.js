// get the form element
const form = document.querySelector('form');

// add event listener for form submission
form.addEventListener('submit', (event) => {
    // prevent the default form submission
    event.preventDefault();
    // check if the form is valid
    if (form.checkValidity()) {
        // if the form is valid, submit it
        form.submit();
    } else {
        // if the form is invalid, display error messages
        const errorMessages = document.querySelectorAll(
            ':invalid + .error-message'
        );
        errorMessages.forEach((errorMessage) => {
            errorMessage.style.display = 'block';
        });
    }
});

export default form;
