function getTodayLabel() {
    
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    
    var today = new Date().getDay();
    var todayLabel = week[today];
    
    return todayLabel;
}

try {
    const appbar_datetime = document.querySelector("time-text");
    const daytext = document.querySelector("day-text");
    const dayx = document.querySelector("dayx-text");
    setInterval(() => {
        today = new Date();
        appbar_datetime.innerHTML = `<time-hour>${(today.getHours() < 10) ? "0" + today.getHours():today.getHours()}</time-hour>:<time-min>${(today.getMinutes() < 10) ? "0" + today.getMinutes():today.getMinutes()}</time-min>`;
        daytext.innerHTML = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${(today.getDate()).toString().padStart(2, '0')}`;
        dayx.innerHTML = getTodayLabel();
    }, 250);
} catch {}

try {
    const aod = document.getElementById("datetime-nonpm");
    setInterval(() => {
        today = new Date();
        aod.innerHTML = `${(today.getHours() < 10) ? "0" + today.getHours():today.getHours()}:${(today.getMinutes() < 10) ? "0" + today.getMinutes():today.getMinutes()}`;
    }, 250);
} catch {}