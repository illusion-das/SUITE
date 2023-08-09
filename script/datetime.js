const appbar_datetime = document.getElementById("datetime");

setInterval(() => {
    today = new Date();

    appbar_datetime.innerHTML = today.toLocaleTimeString().slice(0, -3);
}, 250);