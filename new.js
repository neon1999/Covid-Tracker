function downarro() {
    const downarrow = document.querySelector(".downarrow");
    const uparrow = document.querySelector(".uparrow");
    const nav = document.querySelector(".nav-controls");

    downarrow.classList.add("arrowhide");
    uparrow.classList.add("arrowunhide");
    nav.classList.add("addnavcontrol");


}

function uparro() {
    const downarrow = document.querySelector(".downarrow");
    const uparrow = document.querySelector(".uparrow");
    const nav = document.querySelector(".nav-controls");

    downarrow.classList.remove("arrowhide");
    uparrow.classList.remove("arrowunhide");
    nav.classList.remove("addnavcontrol");


}