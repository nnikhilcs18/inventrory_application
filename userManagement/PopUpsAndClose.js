function getMain() {
    let users = document.querySelector(".users-details");
    users.classList.add("display-none");

    let main = document.querySelector(".main");

    let leftArrow = document.querySelector(".left-arrow");
    leftArrow.classList.remove("display-none");
    leftArrow.addEventListener("click",function (){

        main.classList.add("display-none"); 
        users.classList.remove("display-none");
    });

    main.classList.remove("display-none");    

    let rightSection = document.querySelector(".right-section");
    rightSection.classList.add("display-none");
}

const mediaQuery = window.matchMedia('(max-width: 600px)');
mediaQuery.addListener(handleDevice);
function handleDevice(e){

        let main = document.querySelector(".main");
        let rightSection = document.querySelector(".right-section");
        let users= document.querySelector(".users-contacts");

    if (e.matches) {
        // Then trigger the things
        main.classList.add("display-none");
        rightSection.classList.add("display-none");
        users.addEventListener("click", getMain);
    }
    else{
        main.classList.remove("display-none");
        rightSection.classList.remove("display-none");
        users.removeEventListener("click", getMain);

        let usersBlock = document.querySelector(".users-details");
        usersBlock.classList.remove("display-none");

        let leftArrow = document.querySelector(".left-arrow");
        leftArrow.classList.add("display-none");
    }
}

export function rightPopUp() {
    let right = document.querySelector(".right-section");
    right.classList.add("display-none");

    let formpop = document.querySelector(".right-popup");
    formpop.classList.remove("display-none");
}

export function rightPopClose(e) {
    if (e)
        e.preventDefault();

    let right = document.querySelector(".right-popup");
    right.classList.add("display-none");

    let formpop = document.querySelector(".right-section");
    formpop.classList.remove("display-none");

    let hover = document.querySelector(".row-hovered");
    if (hover)
        hover.classList.remove("row-hovered");
}

export function formClose(e) {
    e.preventDefault();
    let right = document.querySelector(".form-popup");
    right.classList.add("display-none");

    let formpop = document.querySelector(".right-popup");
    formpop.classList.remove("display-none");
}

export function formPopUp(e) {

    e.preventDefault();
    let right = document.querySelector(".right-popup");
    right.classList.add("display-none");

    let formpop = document.querySelector(".form-popup");
    formpop.classList.remove("display-none");
}
