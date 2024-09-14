// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
function toggleDetails(id) {
    const projectDetails = document.getElementById(id);
    const isVisible = projectDetails.style.display === 'block';
    projectDetails.style.display = isVisible ? 'none' : 'block';
}

