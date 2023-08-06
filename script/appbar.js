const appbar = document.getElementById("appbar");
const appbar_background = document.querySelector("control-center-background");
let ff_appbar = false;

// 터치 이벤트
appbar.addEventListener("touchstart", () => { appbar_event(true) })
appbar.addEventListener("touchend", () => { appbar_event(false) })

// 마우스 이벤트
appbar.addEventListener("mousedown", () => { appbar_event(true) })
appbar.addEventListener("mouseup", () => { appbar_event(false) })

function appbar_event(focus) {
    if (focus) {
        focus_time = 0;
        focus_interval = setInterval(() => {
            focus_time += 1;
            if (focus_time > 9 && !ff_appbar) {
                control_center(true);
                appbar_event(false);
            } else if (focus_time > 9 && ff_appbar) {
                control_center(false);
                appbar_event(false);
            }
        }, 25);
        appbar.classList.add("content-focus");
    } else {
        appbar.classList.remove("content-focus");
        clearInterval(focus_interval);
    }
}

function control_center(shown) {
    if (shown) { 
        appbar.classList.add("control-center");
        appbar_background.classList.add("shown-background");
    }
    else {
        appbar.classList.remove("control-center");
        appbar_background.classList.remove("shown-background");
    }
    ff_appbar = shown;
}