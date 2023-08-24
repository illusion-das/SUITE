const aod = document.querySelector("aod-screen");
const datetime = document.querySelector("aod-datetime");

setTimeout(() => {
    datetime.classList.add("aodfade");
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
            if (focus_time > 80) {
                location.href = "home.html";
            }
        }, 10);
    }
    else {
        clearInterval(focus_interval);
        aod.classList.remove("click-focus");
    }

}