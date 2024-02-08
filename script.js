let count = 0;
let streakO = "Streak: No streak so far";

function increment() {
    count++;
    document.getElementById("daysOnTrack").innerText = count; 
      
}

function startOver() {
    document.getElementById("daysOnTrack").innerText = count;    
    document.getElementById("streak").textContent += count + " - "
    count = 0;
