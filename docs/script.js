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

// === Scroll Handlers (global so inline HTML can use them too) ===
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

        if (wrapper.scrollLeft >= maxScrollLeft - 5) { // small buffer to account for rounding
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

