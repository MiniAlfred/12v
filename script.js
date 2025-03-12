function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'flex';

    document.querySelectorAll('.navbar button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById('btn' + pageId.charAt(0).toUpperCase() + pageId.slice(1)).classList.add('active');
}

function toggleRelay(button) {
    button.classList.toggle('active');
}

// Set the initial active button
document.getElementById('btnDashboard').classList.add('active');

function updateGauge(percentage) {
    
    const circle = document.getElementById('batteryCircle');
    const text = document.getElementById('batteryText');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    text.textContent = `${percentage}%`;
}

// Example usage: Update the gauge to 75%
updateGauge(75);