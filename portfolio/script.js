document.addEventListener("DOMContentLoaded", function () {
    // === Modal functionality ===
    const contactModal = document.getElementById("contactModal");
    const contactForm = document.getElementById("contactForm");
    const contactButton = document.querySelector(".contact-button");
    const closeButton = document.querySelector(".close");

    if (contactModal && contactForm && contactButton && closeButton) {
        function openModal() {
            contactModal.style.display = "block";
        }

        function closeModal() {
            contactModal.style.display = "none";
        }

        contactForm.addEventListener("submit", function (event) {
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

        contactButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);

        window.addEventListener("click", function (event) {
            if (event.target === contactModal) {
                closeModal();
            }
        });
    }

    // === Scroll Button functionality ===
    document.querySelectorAll('.scrollButton.left').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.closest('section')?.querySelector('.appWrapper')?.id;
            if (sectionId) {
                scrollLeft(sectionId);
            }
        });
    });

    document.querySelectorAll('.scrollButton.right').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.closest('section')?.querySelector('.appWrapper')?.id;
            if (sectionId) {
                scrollRight(sectionId);
            }
        });
    });
});

// === GitHub Navigation ===
function goToGithub(url) {
    window.open(url, '_blank');
}

// === Scroll Handlers (global so inline HTML can use them too) ===
function scrollLeft(section) {
    const wrapper = document.getElementById(section);
    if (wrapper) {
        wrapper.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    }
}

function scrollRight(section) {
    const wrapper = document.getElementById(section);
    if (wrapper) {
        wrapper.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    }
}
