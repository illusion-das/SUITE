const aod = document.querySelector("aod-screen");

setTimeout(() => {
    document.querySelector("aod-datetime").classList.add("aodfade");
}, 400);

aod.addEventListener("touchstart", () => { focus_on(true) })
aod.addEventListener("touchend", () => { focus_on(false) })

aod.addEventListener("mousedown", () => { focus_on(true) })
aod.addEventListener("mouseup", () => { focus_on(false) })

function focus_on(is) {
    if(is) {
        aod.classList.add("click-focus");
        focus_time = 0;

        focus_interval = setInterval(() => {
            focus_time += 1;
            if (focus_time > 40) {
                location.href = "app.html";
            }
        }, 25);
    }
    else {
        clearInterval(focus_interval);
        aod.classList.remove("click-focus");
    }
}