document.querySelector("app-main").classList.add("fadex");

setTimeout(() => {
    document.querySelector("dock-ui").classList.add("fadey");
}, 425);

const aodbtn = document.querySelector("goto-aod")
const ah = document.querySelector("app-hidder")

// 터치 이벤트
aodbtn.addEventListener("touchstart", () => { gotoaod(true) })
aodbtn.addEventListener("touchend", () => { gotoaod(false) })

// 마우스 이벤트
aodbtn.addEventListener("mousedown", () => { gotoaod(true) })
aodbtn.addEventListener("mouseup", () => { gotoaod(false) })

function gotoaod(is){
    if(is) {
        ah.classList.add("shown-app-hidder");
        aodbtn.classList.add("to-aod");
        focus_time = 0;

        focus_interval = setInterval(() => {
            focus_time += 1;
            if (focus_time > 20) {
                setTimeout(() => {
                    aodbtn.classList.add("black-aod");
                }, 200);
            
                setTimeout(() => {
                    location.href = "aod.html";
                }, 400);
            }
        }, 25);
    }
    else {
        clearInterval(focus_interval);
        aodbtn.classList.remove("to-aod");
        ah.classList.remove("shown-app-hidder");
    }
}