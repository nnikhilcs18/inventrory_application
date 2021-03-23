import {
    showHovered,
    closeLogs
} from "./hover_logs.js";

import {
    rightPopClose,
    rightPopUp
} from "./popUpsAndClose.js"

import {formUpdate} from "./formUpdate.js"

import memory from "../utils/memory.js";

export function getResources() {
    let parentUsers;
    let myTarget;
    if(!this){
        parentUsers = document.querySelector(".users-gmail-hovered");
        myTarget = parentUsers;
    }
    else{
        parentUsers = this;
        myTarget = this;
    }

    let hovered = document.querySelector(".users-gmail-hovered");
    hovered.classList.remove("users-gmail-hovered");
    myTarget.classList.add("users-gmail-hovered");


    let userName = parentUsers.children[0].innerText;
    let userContact = document.querySelectorAll('.user-contact-id');
    userContact[0].innerText = parentUsers.children[1].innerText;
    let mail = parentUsers.children[1].innerText;
    let mainHeader = document.querySelector(".main-header>h3");
    mainHeader.innerText = userName;

    let option = document.querySelector('.option-assignedto');
    option.innerText = userName;

    let statusName = document.querySelector('.logs-status-name');
    statusName.innerText = "by " + userName;
    let skype;


    let mainRow = document.querySelector('.main-data-after-header');
    mainRow.innerHTML = "";
    for (let i of memory.users) {
        if (i.email === mail) {
            skype = i.skype;
            let divEmpty = document.createElement('div');

            let divType = document.createElement('div');
            divType.append(i.type);
            // document.write(icon);

            let divSerial = document.createElement('div');
            divSerial.append(i.serial);

            let divName = document.createElement('div');
            divName.append(i.name);

            let divFrom = document.createElement('div');
            divFrom.append(i.from);

            let divMain = document.createElement('div');
            divMain.className = "row";
            divMain.append(divEmpty, divType, divSerial, divName, divFrom);
            divMain.addEventListener("click", formUpdate);
            divMain.addEventListener("click", rightPopUp);
            divMain.addEventListener("click", showHovered);
            divMain.addEventListener("click", closeLogs);

            mainRow.append(divMain);
        }
    }
    userContact[1].innerText = skype;
    rightPopClose();
}