let d = new Date();
const days = ["Sun", "Mon", "Tuey", "Wed", "Thu", "Fri", "Sat"];
let day = days[d.getDay()];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[d.getMonth()];

let fullyear = d.getFullYear()

let t = d.getDate();

let fulldate =  day + ", " + t + " " + month + " " + fullyear; 
document.getElementById("current-date").textContent = fulldate;

// Saturday = Preston Pancakes in the Park! 9:00a.m Saturday at the city park.