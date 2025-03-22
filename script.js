document.addEventListener("DOMContentLoaded", function () {
    const sections = {
        "dashboard": document.getElementById("dashboard-section"),
        "courses": document.getElementById("courses-section"),
        "quizzes": document.getElementById("quizzes-section"),
        "settings": document.getElementById("settings-section"),
        "grades": document.getElementById("grades-section")
    };

    const menuItems = document.querySelectorAll(".sidebar ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Sidebar Navigation Functionality
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            // Toggle Active Class
            document.querySelector(".sidebar .active")?.classList.remove("active");
            this.parentElement.classList.add("active");

            // Get Target Section
            const sectionKey = this.textContent.trim().toLowerCase();

            // Hide All Sections & Show Target Section
            Object.values(sections).forEach(section => section.style.display = "none");
            if (sections[sectionKey]) {
                sections[sectionKey].style.display = "block";
            }
        });
    });

    // Theme Toggle Functionality
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save Theme Preference to Local Storage
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Apply Theme on Page Load
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }
});
