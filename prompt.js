document.getElementById("acceptBtn").addEventListener("click", function() {
    alert("You have accepted the terms and conditions.");
    window.location.href = "index.html"; // Redirect to the homepage
});

document.getElementById("declineBtn").addEventListener("click", function() {
    alert("You must accept the terms to use this service.");
});