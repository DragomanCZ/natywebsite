document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    var today = new Date();
    var currentDateElement = document.getElementById("currentDate");

    // Display the current date in Czech format (e.g., "12. listopadu 2023")
    var options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
    currentDateElement.textContent = today.toLocaleDateString('cs-CZ', options);

    // Calculate the number of days remaining until December 13, 2023
    var cmas = new Date(2024, 3, 18); // Note: Months are zero-indexed, so December is 11
    
    var one_day = 1000 * 60 * 60 * 24;
    var number = Math.ceil((cmas.getTime() - today.getTime()) / one_day); // Using Math.ceil to ensure a positive number
    var imageUrl = number + ".jpeg"; // Concatenating with ".jpeg"
    var textUrl = number + ".txt"; // Concatenating with ".txt"

    // Set the image source
    var dynamicImage = document.getElementById("dynamicImage");
    dynamicImage.src = imageUrl;

    // Set the text file source
    var dynamicText = document.getElementById("dynamicText");
    dynamicText.data = textUrl;

    // Fetch text content from the dynamically generated text file with UTF-16 encoding
    fetch(textUrl, { headers: { 'Content-Type': 'text/plain; charset=utf-16' } })
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(text => {
            var textElement = document.createElement('p');
            textElement.textContent = text;
            document.querySelector('.container').appendChild(textElement);
        })
        .catch(error => {
            console.error('Error fetching text:', error);
            // Display "hi" if the file doesn't exist
            var textElement = document.createElement('p');
            textElement.textContent = "";
            document.querySelector('.container').appendChild(textElement);
        });
});
