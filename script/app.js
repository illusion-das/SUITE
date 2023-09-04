document.querySelector("app-main").classList.add("fadex");

setTimeout(() => {
    document.querySelector("dock-widget").classList.add("dockup");
}, 400);

const aodbtn = document.querySelector(".item2")

// 터치 이벤트
aodbtn.addEventListener("touchstart", () => { gotoaod(true) })
aodbtn.addEventListener("touchend", () => { gotoaod(false) })

// 마우스 이벤트
aodbtn.addEventListener("mousedown", () => { gotoaod(true) })
aodbtn.addEventListener("mouseup", () => { gotoaod(false) })

function gotoaod(is){
    if(is) {
        aodbtn.classList.add("start-aod");
        focus_time = 0;

        focus_interval = setInterval(() => {
            focus_time += 1;
            if (focus_time > 15) {
                setTimeout(() => {
                    aodbtn.classList.add("middle-aod");
                }, 25);
            
                setTimeout(() => {
                    location.href = "index.html";
                }, 400);
            }
        }, 10);
    }
    else {
        clearInterval(focus_interval);
        aodbtn.classList.remove("start-aod");
    }
}

const apps = document.querySelectorAll("apps");

apps.forEach(i => {
    i.addEventListener("mouseup", () => {i.classList.add("open")} );
    i.addEventListener("touchend", () => {i.classList.add("open")} )
});

function openApps(link) {
    location.href = link;
}