document.addEventListener("DOMContentLoaded", function() {
    var visitMessage = document.getElementById("visitMessage");
    var lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        var now = new Date();
        var daysSinceLastVisit = Math.floor((now - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            var message = "You last visited " + daysSinceLastVisit + " day" + (daysSinceLastVisit === 1 ? "" : "s") + " ago.";
            visitMessage.textContent = message;
        }
    }

    localStorage.setItem("lastVisit", new Date());
});