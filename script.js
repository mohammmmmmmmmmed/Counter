// Initialize count and streak from localStorage or default to 0 and "Streak: No streak so far"
let count = parseInt(localStorage.getItem('count')) || 0;
let streak = localStorage.getItem('streak') || "No streak so far";
let start  = localStorage.getItem('start') || "No streak so far";

// Update the HTML elements with initial count and streak values
document.getElementById("daysOnTrack").innerText = count;
document.getElementById("streak").textContent = streak;

// Function to increment count and update streak
function increment() {
    count++;
    localStorage.setItem('count', count);
    document.getElementById("daysOnTrack").innerText = count;
}

// Function to reset count and update streak
function startOver() {
    streak += count + " - ";
    localStorage.setItem('streak', streak);
    localStorage.setItem('count', 0);
    start = start;
    count = 0;
    document.getElementById("daysOnTrack").innerText = count;
    document.getElementById("streak").textContent = streak;
}
