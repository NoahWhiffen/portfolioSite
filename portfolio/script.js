document.addEventListener("DOMContentLoaded", function() {
    // Open the modal when the "Contact me" button is clicked
    function openModal() {
        document.getElementById("contactModal").style.display = "block";
    }

    // Close the modal when the user clicks on <span> (x)
    function closeModal() {
        document.getElementById("contactModal").style.display = "none";
    }

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        closeModal();

        alert("Thank you for reaching out! Your message has been sent.");
    });

    document.querySelector(".contact-button").addEventListener("click", openModal);

    // Close the modal when the user clicks on the close button (X)
    document.querySelector(".close").addEventListener("click", closeModal);

    window.addEventListener("click", function(event) {
        const modal = document.getElementById("contactModal");
        if (event.target === modal) {
            closeModal();
        }
    });
});