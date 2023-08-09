document.querySelector("app-main").classList.add("fade");

function gotoaod(){
    aodbtn = document.querySelector("goto-aod")
    aodbtn.classList.add("to-aod");

    setTimeout(() => {
        aodbtn.classList.add("black-aod");
    }, 250);

    setTimeout(() => {
        location.href = "aod.html";
    }, 600);
}