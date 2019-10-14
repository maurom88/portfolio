function form_validation() {
    // get phone number value from form
    var phoneNumber = document.getElementById('phone').value;
    var error = "";
    // check if phone number is a number
    if (isNaN(phoneNumber)) {
        // if it is not a number, display error
        error = "<span style='color:red'>Please enter a valid phone number!</span>";
        document.getElementById('phone_err').innerHTML = error;
    } else {
        // if it is a number, proceed without doing anything
        error = "";document.getElementById('phone_err').innerHTML = error;
    }
}