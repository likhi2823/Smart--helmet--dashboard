
// SafeRide - Smart Helmet System

// Accident detection simulation
function showAlert() {

    // Update accident status
    document.getElementById("accidentStatus").innerText =
        "Accident Detected!";

    // Change accident color
    document.getElementById("accidentStatus").style.color =
        "red";

    // Update rider safety status
    document.getElementById("helmetStatus").innerText =
        "Check Rider";

    document.getElementById("helmetStatus").style.color =
        "red";

    // Update emergency alert
    document.getElementById("emergencyStatus").innerText =
        "Alert Activated";

    document.getElementById("emergencyStatus").style.color =
        "red";

    // Display emergency message
    alert(
        "⚠️ EMERGENCY ALERT!\n\n" +
        "Possible accident detected!\n" +
        "Please check the rider immediately.\n" +
        "Emergency assistance may be required."
    );
}


// Reset dashboard
function resetSystem() {

    document.getElementById("accidentStatus").innerText =
        "No Accident";

    document.getElementById("accidentStatus").style.color =
        "#16845b";

    document.getElementById("helmetStatus").innerText =
        "Helmet Worn";

    document.getElementById("helmetStatus").style.color =
        "#16845b";

    document.getElementById("emergencyStatus").innerText =
        "Ready";

    document.getElementById("emergencyStatus").style.color =
        "#16845b";

    alert("System Reset Successfully!");
}
