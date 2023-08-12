try {
    const appbar_datetime = document.getElementById("datetime");
    setInterval(() => {
        today = new Date();
        appbar_datetime.innerHTML = today.toLocaleTimeString().slice(0, -3);
    }, 250);   
} catch {}

try {
    const aod = document.getElementById("datetime-nonpm");
    setInterval(() => {
        today = new Date();
        aod.innerHTML = `${(today.getHours() < 10) ? "0" + today.getHours():today.getHours()}:${(today.getMinutes() < 10) ? "0" + today.getMinutes():today.getMinutes()}`;
    }, 250);
} catch {}