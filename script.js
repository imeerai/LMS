document.addEventListener("DOMContentLoaded", function () {
    const sections = {
        "dashboard": document.getElementById("dashboard-section"),
        "courses": document.getElementById("courses-section"),
        "quizzes": document.getElementById("quizzes-section"), 
        "reminder": document.getElementById("reminder-section"),
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











document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: []
    });

    calendar.render();

    const reminderList = document.getElementById('reminderList');

    document.getElementById('reminderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('reminderTitle').value;
        const date = document.getElementById('reminderDate').value;
        const time = document.getElementById('reminderTime').value;

        if (title && date && time) {
            calendar.addEvent({
                title: `${title} - ${time}`,
                start: `${date}T${time}`
            });

            addReminderToList(title, date, time);
            alert('Reminder Added!');
            this.reset();
        }
    });

    function addReminderToList(title, date, time) {
        const reminderItem = document.createElement('div');
        reminderItem.className = 'reminder-item';
        reminderItem.innerHTML = `${title} on ${date} at ${time} <button onclick="deleteReminder(this, '${title}', '${date}', '${time}')">Delete</button>`;
        reminderList.appendChild(reminderItem);
    }

    window.deleteReminder = function(button, title, date, time) {
        button.parentElement.remove();
        const events = calendar.getEvents();
        events.forEach(event => {
            if (event.title === `${title} - ${time}` && event.startStr.startsWith(date)) {
                event.remove();
            }
        });
    };
});












