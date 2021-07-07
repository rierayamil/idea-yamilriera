window.sr = ScrollReveal();
sr.reveal('.item_logo', {
    duration: 4000,
    origin: 'bottom',
    distance: '-100px',
    

});
window.addEventListener("load", function () {
    document.getElementById("loader").classList.toggle("loader2")

});


let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}
searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}

