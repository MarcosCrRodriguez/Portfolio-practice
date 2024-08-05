document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    // Cargar la preferencia del usuario
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        navbar.classList.add("dark-mode");
    } else {
        body.classList.add("light-mode");
        navbar.classList.add("light-mode");
    }

    document.getElementById("light-mode").addEventListener("click", function() {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        navbar.classList.remove("dark-mode");
        navbar.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    });

    document.getElementById("dark-mode").addEventListener("click", function() {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        navbar.classList.remove("light-mode");
        navbar.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    });
});