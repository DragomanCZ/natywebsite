document.addEventListener("DOMContentLoaded", function () {
    // Assuming images are stored in the same directory as the HTML file
    
    var now = new Date();
    var currentDateElement = document.getElementById("currentDate");

    // Display the current date in a readable format (e.g., "November 12, 2023")
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    currentDateElement.textContent = now.toLocaleDateString('cs-CZ', options);
    
    today = new Date();
    var cmas = new Date(2023, 10, 13); // Note: Months are zero-indexed, so December is 11
    if (today.getMonth() == 11 && today.getDate() > 13) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    var number = Math.ceil((cmas.getTime() - today.getTime()) / one_day); // Using Math.ceil to ensure positive number
    var imageUrl = number + ".jpeg"; // Concatenating with ".jpeg"

    var dynamicImage = document.getElementById("dynamicImage");
    dynamicImage.src = imageUrl;
 

});
