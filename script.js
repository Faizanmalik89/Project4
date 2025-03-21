function sendOTP() {
    var email = document.getElementById("resetEmail").value;
    if (email) {
        alert("OTP has been sent to " + email);
        // Here, we will integrate the backend for sending OTP via Node.js or PHP
    } else {
        alert("Please enter a valid email");
    }
}