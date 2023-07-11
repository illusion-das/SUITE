const appbar = document.getElementById("appbar");

appbar.addEventListener("touchstart", () => {
    appbar.classList.add("content-focus");
})

appbar.addEventListener("touchend", () => {
    appbar.classList.remove("content-focus");
})