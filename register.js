function sendOTP() {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter your email.");
        return;
    }

    // Simulating sending OTP (Replace with backend API call)
    localStorage.setItem("otp", "123456"); // Temporary OTP storage
    alert("OTP sent to " + email);
    document.getElementById("otpSection").style.display = "block";
}

function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;
    const storedOTP = localStorage.getItem("otp");

    if (enteredOTP === storedOTP) {
        alert("OTP Verified! You can now register.");
        document.getElementById("registerButton").disabled = false;
    } else {
        alert("Invalid OTP. Try again.");
    }
}