let clockInterval; // متغير لتخزين معرف المؤقت

window.onload = function () {
  dmode();
};

//--------------------------------------------jupiter--------------------------------------------

function lmode() {
  clearInterval(clockInterval); // إيقاف أي مؤقت نشط

  var videoElement = document.getElementById("backgroundVideo");
  videoElement.src = "video/jupiter.mp4";
  videoElement.load();
  videoElement.play();

  //-------------------
  function jupiterClock() {
    let date = new Date();

    // حساب الوقت في تقويم المشتري
    let jupiterHours = Math.floor(
      (date.getHours() + date.getMinutes() / 60) * 0.412
    );
    let jupiterMinutes = Math.floor(date.getMinutes() * 0.412);
    let jupiterSeconds = Math.floor(date.getSeconds() * 0.412);
    let period = "AM";

    if (jupiterHours >= 12) {
      jupiterHours -= 12;
      period = "PM";
    }

    jupiterHours = jupiterHours < 10 ? "0" + jupiterHours : jupiterHours;
    jupiterMinutes =
      jupiterMinutes < 10 ? "0" + jupiterMinutes : jupiterMinutes;
    jupiterSeconds =
      jupiterSeconds < 10 ? "0" + jupiterSeconds : jupiterSeconds;
    let jupiterTime = `${jupiterHours}:${jupiterMinutes}:${jupiterSeconds} ${period}`;

    document.getElementById("Clock").innerText = jupiterTime;
  }

  clockInterval = setInterval(jupiterClock, 1000); // بدء المؤقت لتحديث الساعة كل ثانية
  jupiterClock(); // عرض الوقت مباشرة بعد تفعيل الوضع
}

//--------------------------------------------earth--------------------------------------------

function dmode() {
  clearInterval(clockInterval); // إيقاف أي مؤقت نشط

  var videoElement = document.getElementById("backgroundVideo");
  videoElement.src = "video/earth.mp4";
  videoElement.load();
  videoElement.play();

  //-------------------
  function earthClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";

    if (hours == 0) {
      hours = 12;
    } else if (hours >= 12) {
      hours -= 12;
      period = "PM";
    } else if (hours == 0) {
      hours = 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let time = `${hours}:${minutes}:${seconds} ${period}`;

    document.getElementById("Clock").innerText = time;
  }

  clockInterval = setInterval(earthClock, 1000); // بدء المؤقت لتحديث الساعة كل ثانية
  earthClock(); // عرض الوقت مباشرة بعد تفعيل الوضع
}
