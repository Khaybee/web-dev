document.getElementById("calculateBtn").addEventListener("click", function () {
    var yourName = document.getElementById("yourName").value;
    var partnerName = document.getElementById("partnerName").value;
    
    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
    } else {

        // var love = Math.random();
        //     love = Math.floor(love * 100) + 1;

        var love = calculateLoveScore(yourName, partnerName)
        
        if (love === 100){
            alert("You are a " + love + "% match.\n\n" +
                "Dr Kachie says: You are a perfect match made from heaven 💯💝");
        }
        if (love >= 70){
            alert("You are a " + love + "% match.\n\n" +
                "Dr Kachie says: You should get married 🥰");
        }
        else if (love >= 50 && love < 70){
            alert("You are a " + love + "% match.\n\n" +
                "Dr Kachie says: You have a shot together 😉");
        }
            
        else if (love < 50 && love > 20){
            alert("You are a " + love + "% match.\n\n" +
                "Dr Kachie says: There might be no future here 😔");
        }
        else {
            alert("You are a " + love + "% match.\n\n" +
                "Dr Kachie says: Definitely a waste of time and emotions 💔");
        }

         // Refresh the page after the alert is closed
        window.location.reload();

    }
});

function calculateLoveScore(name1, name2) {
    // Combine names alphabetically
    var combinedNames = [name1.toLowerCase(), name2.toLowerCase()].sort().join("");

    // Generate a simple hash
    var hash = 0;
    for (var i = 0; i < combinedNames.length; i++) {
        hash = (hash << 5) - hash + combinedNames.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
    }

    // Map the hash to a percentage (0–100)
    var percentage = Math.abs(hash) % 101;
    return percentage;
}