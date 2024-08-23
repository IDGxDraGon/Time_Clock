let hour = document.querySelector(".hour-hand");
let minet = document.querySelector(".minet-hand");
let sec = document.querySelector(".sec-hand");

function setDate() {
  let date = new Date();
  let h = (date.getHours() / 12) * 360 + 90;
  hour.style.transform = `rotate(${h}deg)`;

  let m = (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6 + 90;
  minet.style.transform = `rotate(${m}deg)`;

  let s = (date.getSeconds() / 60) * 360 + 90;
  sec.style.transform = `rotate(${s}deg)`;
}

setInterval(setDate, 1000);
setDate();

//----------------- Design ----------------------//

let clock = document.querySelector(".Clock");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

function updateSunMoonPosition() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Convert current time to a percentage of the 12-hour cycle
  let timeProgress =
    ((hours % 12) * 60 * 60 + minutes * 60 + seconds) / (12 * 60 * 60);

  // Calculate positions
  let sunX = -30 + 40 * Math.cos(2 * Math.PI * timeProgress);
  let sunY = -30 - 35 * Math.sin(2 * Math.PI * timeProgress);
  let moonX = -30 + 40 * Math.cos(2 * Math.PI * (timeProgress + 0.5));
  let moonY = -30 - 35 * Math.sin(2 * Math.PI * (timeProgress + 0.5));

  sun.style.left = `calc(${sunX}% - 50px)`;
  sun.style.top = `calc(${sunY}% - 50px)`;
  moon.style.left = `calc(${moonX}% - 50px)`;
  moon.style.top = `calc(${moonY}% - 50px)`;

  // Update visibility based on time
  if (hours >= 6 && hours < 18) {
    document.body.style.backgroundImage = 'url("images/day.jpg")';
    sun.style.display = "block";
    moon.style.display = "none";
    clock.style.borderColor = "black";
    hour.style.background = "black";
    minet.style.background = "black";
  } else {
    document.body.style.backgroundImage = 'url("images/midnight.jpg")';
    sun.style.display = "none";
    moon.style.display = "block";
    clock.style.borderColor = "white";
    hour.style.background = "white";
    minet.style.background = "white";
  }
}

setInterval(updateSunMoonPosition, 1000);
updateSunMoonPosition();
