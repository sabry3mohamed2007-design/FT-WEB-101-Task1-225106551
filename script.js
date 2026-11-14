const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light mode";
    } else {
        themeToggle.textContent = "🌙 Dark mode";
    }
});

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("visitor-name").value.trim();
    formMessage.textContent = `Hello, ${visitorName}! Your form is ready.`;

    contactForm.reset();
});
