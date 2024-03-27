
function menuDisplay() {
    var menu = document.getElementById("nav-bar");
    var image = document.getElementById("menu1");
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
        image.src = "icon-menu-close.svg";
        
    }else if (menu.style.display === "block") {
        menu.style.display = 'none'
        image.src = "icon-menu.svg";
    }
}
var menu1 = document.getElementById("menu1");
menu1.addEventListener("click", menuDisplay);