document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Extract input fields safely
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Placeholder execution: Replace this block with a service integration like EmailJS or a fetch request to a backend API router
            alert(`Thanks for reaching out, ${name}! Your simulation message has been compiled.`);
            form.reset();
        }
    });
});