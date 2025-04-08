
document.addEventListener("DOMContentLoaded", function () {
    const calendarTable = document.getElementById("week-row");
    const prevWeekBtn = document.getElementById("prev-week");
    const nextWeekBtn = document.getElementById("next-week");
    const calendarMonth = document.getElementById("calendar-month");

    let currentDate = new Date();

    function updateWeek() {
        let start = new Date(currentDate);
        let day = start.getDay();
        let diff = start.getDate() - day + (day === 0 ? -6 : 1);
        start.setDate(diff);

        let weekDates = [];
        let today = new Date().getDate();
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        for (let i = 0; i < 7; i++) {
            let tempDate = new Date(start);
            tempDate.setDate(start.getDate() + i);

            let isToday = (tempDate.getDate() === today && tempDate.getMonth() === currentMonth && tempDate.getFullYear() === currentYear);

            let dateHTML = isToday
                ? `<td style="background-color: green; color: white; border-radius: 50%; padding: 5px; text-align: center;">${tempDate.getDate()}</td>`
                : `<td>${tempDate.getDate()}</td>`;

            weekDates.push(dateHTML);
        }

        calendarTable.innerHTML = weekDates.join("");
        let updatedMonth = start.toLocaleString("default", { month: "long" });
        let updatedYear = start.getFullYear();
        calendarMonth.innerText = `${updatedMonth} ${updatedYear}`;
    }

    prevWeekBtn.addEventListener("click", function () {
        currentDate.setDate(currentDate.getDate() - 7);
        updateWeek();
    });

    nextWeekBtn.addEventListener("click", function () {
        currentDate.setDate(currentDate.getDate() + 7);
        updateWeek();
    });

    updateWeek();
});
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body; // Body element

    // Apply Theme on Page Load
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    // Theme Toggle Functionality
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save Theme Preference to Local Storage
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
});

        document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const modal = document.getElementById('imageUploadModal');
            const closeModalBtn = document.getElementById('closeModal');
            const cancelBtn = document.getElementById('cancelButton');
            const updateBtn = document.getElementById('updateButton');
            const fileInput = document.getElementById('file-input');
            const imagePreview = document.getElementById('imagePreview');
            const profileImages = document.querySelectorAll('img[src="/dp.jpg"]');
            
            let newImageSelected = false;
            let newImageData = null;
            
            // Check if there's a saved image in localStorage
            const savedImage = localStorage.getItem('profileImage');
            if (savedImage) {
                // Update all profile images on the page
                profileImages.forEach(img => {
                    img.src = savedImage;
                });
                imagePreview.src = savedImage;
            }
            
            // Add click event to all profile images
            profileImages.forEach(img => {
                img.addEventListener('click', openModal);
                // Make the cursor a pointer to indicate it's clickable
                img.style.cursor = 'pointer';
            });
            
            // Open modal function
            function openModal() {
                modal.style.display = 'flex';
                // Reset the preview to the current profile image
                imagePreview.src = profileImages[0].src;
                newImageSelected = false;
                updateBtn.disabled = true;
            }
            
            // Close modal function
            function closeModal() {
                modal.style.display = 'none';
            }
            
            // Close modal when clicking close button or cancel
            closeModalBtn.addEventListener('click', closeModal);
            cancelBtn.addEventListener('click', closeModal);
            
            // Handle file selection
            fileInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        imagePreview.src = event.target.result;
                        newImageData = event.target.result;
                        newImageSelected = true;
                        updateBtn.disabled = false;
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            // Handle update button click
            updateBtn.addEventListener('click', function() {
                if (newImageSelected && newImageData) {
                    // Update all profile images on the page
                    profileImages.forEach(img => {
                        img.src = newImageData;
                    });
                    
                    // Save to localStorage for persistence
                    localStorage.setItem('profileImage', newImageData);
                    
                    // Close the modal
                    closeModal();
                }
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        });

