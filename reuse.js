// reuse.js

// Sidebar content
const sidebarHTML = `
<div class="logo"> 
    <img src="image.png" alt="">
    <h2>PBL</h2>
</div>
<nav>
    <ul>
        <li class="active"><a href="index.html">Dashboard</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="quizes.html">Quizzes</a></li>
        <li><a href="grades.html">Grades</a></li>
        <li><a href="reminder.html">Reminder</a></li>
        <li><a href="reminder.html">Settings</a></li>
    </ul>
</nav>
`;

// Profile section content
const profileHTML = `
<div class="profile-card">
    <img src="/dp.jpg" alt="User">
    <h4>Zameer Abbas</h4>
    <p>Bachelor of Engineering in Computer Systems</p>
</div>

<div class="calendar">
    <div class="calendar-header">
        <button id="prev-week">&lt;</button>
        <h4 id="calendar-month"></h4>
        <button id="next-week">&gt;</button>
    </div>
    <table id="calendar-table">
        <tr>
            <th>Sun</th><th>Mon</th><th>Tue</th>
            <th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
        </tr>
        <tr id="week-row"></tr>
    </table>
</div>

<div class="homework-progress">
    <h4>Study Reminders</h4>
    <div class="progress-card"><p>WE Quize</p><span>now</span></div>
    <div class="progress-card"><p>SE Presentation</p><span>1 hour</span></div>
    <div class="progress-card"><p>MIT quize</p><span>2 hours</span></div>
    <div class="progress-card"><p>CN quize</p><span>3 hours</span></div>
    <div class="progress-card"><p>SP ckass</p><span>4 hour</span></div>
</div>
`;

// Inject sidebar
const sidebar = document.getElementById("load-sidebar");
if (sidebar) {
    sidebar.className = "sidebar lolo";
    sidebar.innerHTML = sidebarHTML;
}

// Inject profile section
const profileSection = document.getElementById("load-profile-section");
if (profileSection) {
    profileSection.className = "profile-section";
    profileSection.innerHTML = profileHTML;
}