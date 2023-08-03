const appbar = document.getElementById("appbar");

// 터치 이벤트
appbar.addEventListener("touchstart", () => {
    appbar.classList.add("content-focus");
})

appbar.addEventListener("touchend", () => {
    appbar.classList.remove("content-focus");
})

// 마우스 이벤트
appbar.addEventListener("mousedown", () => {
    appbar.classList.add("content-focus");
})

appbar.addEventListener("mouseup", () => {
    appbar.classList.remove("content-focus");
})