const appbar_datetime = document.getElementById("datetime");

setInterval(() => {
    today = new Date();

    appbar_datetime.innerHTML = today.toLocaleTimeString().substr(0, 8);
}, 500);