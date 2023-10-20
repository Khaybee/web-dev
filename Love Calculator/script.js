document.getElementById("calculateBtn").addEventListener("click", function () {
    var yourName = document.getElementById("yourName").value;
    var partnerName = document.getElementById("partnerName").value;
    
    if (yourName === "" || partnerName === "") {
        alert("Please enter both names.");
    } else {

        var love = Math.random();
            love = Math.floor(love * 100) + 1;
        
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

        // Here, you can calculate the love percentage and display it to the user.
        // var lovePercentage = Math.floor(Math.random() * 101); // For demonstration purposes, generate a random percentage.
        // alert("Love Percentage between " + yourName + " and " + partnerName + " is " + lovePercentage + "%");
    }
});