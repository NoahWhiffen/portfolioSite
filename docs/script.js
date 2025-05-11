// === Modal Open/Close Functions in Global Scope ===
function openModal() {
    const modal = document.getElementById("contactModal");
    if (modal) modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contactModal");
    if (modal) modal.style.display = "none";
}

// Contact Form functionality
document.addEventListener("DOMContentLoaded", function () {
    
    const contactModal = document.getElementById("contactModal");
    const contactForm = document.getElementById("contactForm");
    const contactButton = document.querySelector(".contact-button");
    const closeButton = document.querySelector(".close");

    if (contactModal && contactForm && contactButton && closeButton) {
        contactButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);

        window.addEventListener("click", function (event) {
            if (event.target === contactModal) {
                closeModal();
            }
        });

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
    }
});

// === Scroll Handlers (Global Scope) ===
function scrollSectionLeft(section) {
    const wrapper = document.getElementById(section);
    if (wrapper) {
        if (wrapper.scrollLeft <= 0) {
            wrapper.scrollTo({
                left: wrapper.scrollWidth,
                behavior: 'smooth'
            });
        } else {
            wrapper.scrollBy({
                left: -750,
                behavior: 'smooth'
            });
        }
    }
}

function scrollSectionRight(section) {
    const wrapper = document.getElementById(section);
    if (wrapper) {
        const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;

        if (wrapper.scrollLeft >= maxScrollLeft - 5) {
            wrapper.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        } else {
            wrapper.scrollBy({
                left: 750,
                behavior: 'smooth'
            });
        }
    }
}
