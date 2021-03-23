import { showData } from "./showData.js";

import {init} from "./UserManagement.js";

import memory from "../utils/memory.js";

export function sync() {
    let mainImage = document.querySelector(".main-image");
    mainImage.classList.remove("display-none");
    init();
}

let allUsers;
export function search() {

    allUsers = [];
    for (let i of memory.users) {
        let found = allUsers.find(user => user.username === i.username)
        if (!found)
            allUsers.push(i)
    }   

   
    let userHeader = document.querySelectorAll(".users-header-items");
    for(let items of userHeader)
        items.classList.add("display-none");

    let closeBtn = document.querySelector(".close-search");
    closeBtn.addEventListener("click", searchShowData);

    let userDetails = document.querySelectorAll(".users-header-bar");
    for(let items of userDetails)
        items.classList.remove("display-none");


    let search = document.querySelector("#searchName");
    search.addEventListener('input', filterData);
}

function filterData() {
    let newUsers = [];
    let search = document.querySelector("#searchName");
    for(let user of allUsers){
        const searchName = user.username.toLowerCase();
        if(searchName.includes(search.value)){
            newUsers.push(user);
        }
    }
    let notFound = document.querySelector(".users-not-found");
    if(newUsers.length == 0){
        notFound.classList.remove("display-none");
    }
    else{
        notFound.classList.add("display-none");
    }

    showData(newUsers);
}

function searchShowData(){
    let notFound = document.querySelector(".users-not-found");
    notFound.classList.add("display-none");

    let userDetails = document.querySelectorAll(".users-header-bar");
    for(let items of userDetails)
        items.classList.add("display-none");

    let userHeader = document.querySelectorAll(".users-header-items");
    for(let items of userHeader)
        items.classList.remove("display-none");

    showData(memory.users);
}