
const menu =  document.querySelector("#menu-icon");
const sideBar =  document.querySelector(".side-bar");
const CloseIcon = document.querySelector(".closeIcon");


menu.addEventListener("click",() => {
    sideBar.classList.toggle("show-sideBar")
})

CloseIcon.addEventListener("click", () => {
    sideBar.classList.remove("show-sideBar");
})

//------------------------- LISTING PAGE ---------------------//