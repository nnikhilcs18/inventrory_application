import {
    loadComponents
} from "../utils/loadComponents.js";

import {
    fetchData
} from "../utils/utility.js";

import {
    showData
} from "./showData.js"

import {
    showLogs
} from "./hover_Logs.js"

import {rightPopClose} from "./PopUpsAndClose.js"

import {formClose, formPopUp} from "./PopUpsAndClose.js"

import {search,sync} from "./search.js"

import {editUserSubmit} from "./formUpdate.js"

import memory from "../utils/memory.js";

import { getResources } from "./getResources.js";

window.addEventListener("DOMContentLoaded",init);

if(Cookies.get('LoggedIn')==null) { 
    alert("User Not Logged in yet");
    window.location.href = '../SignIn/signIn.html';
}

export function init() {
    fetchData('https://inventorydb-0ecc.restdb.io/rest/userunits').then((responseData) => {

    let mainImage = document.querySelector(".main-image");
    mainImage.classList.add("display-none");
    if(responseData.length===0){
        const msgElement = document.querySelector('.error-display');
        msgElement.append("Something Went Wrong!");
    }
    else{
        const msgElement = document.querySelector('.error-display');
        msgElement.classList.add("display-none");
    }
    memory.users = responseData;
    showData(responseData);
    getResources();

});

loadComponents();

let showLog = document.querySelector('.showLogs');
showLog.addEventListener("click", showLogs);

let closeBtn = document.querySelector('.close-icon-right-popup');
closeBtn.addEventListener('click', rightPopClose);

let closeBtns = document.querySelectorAll('.close-form');
for (let closeBtn of closeBtns)
    closeBtn.addEventListener('click', formClose);

let editBtn = document.querySelector('.fa-pen');
editBtn.addEventListener('click', formPopUp);

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", search);

let syncBtn = document.querySelector(".sync-btn");
syncBtn.addEventListener("click", sync);

let btnSave = document.querySelector('.formSubmit');
btnSave.addEventListener('click', editUserSubmit);
}

