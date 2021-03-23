import {
    fetchData
} from "../utils/utility.js";
import {
    loadComponents
} from "../utils/loadComponents.js";
import {
    addUnit,
    saveHandler,
    closePopUp,
    resetForm,
    closeMsg
} from "./newRecord.js"

import {
    searchbarshow,
    searchtext,
    backButtonHandler
} from "./search.js"

import {
    showData
} from "./showData.js";

import memory from "../utils/memory.js";

import {
    refresh
} from "./refresh.js";

window.addEventListener('DOMContentLoaded', init);


function init() {
    if (Cookies.get('LoggedIn') == null) {
        window.location.href = '../SignIn/signIn.html';
    }

    loadComponents();

    fetchData('https://inventorydb-0ecc.restdb.io/rest/units').then((responseData) => {
        let element = document.querySelector('.main img');
        element.classList.add('hide');

        if (responseData.length === 0) {
            const msgElement = document.querySelector('.main-content');
            msgElement.classList.remove('main-content');
            msgElement.classList.add('invalid-fetch-data', 'msg-box');
            msgElement.append("Something Went Wrong!");
        }
        showData(responseData);
        memory.units = responseData;
    });

    const addButton = document.querySelector('.add-button');
    addButton.addEventListener('click', addUnit);

    const saveButton = document.querySelector('.save-button');
    saveButton.addEventListener("click", saveHandler);

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener("click", closePopUp);

    const cancelButton = document.querySelector('.cancel-button');
    cancelButton.addEventListener("click", resetForm);

    const backButton = document.querySelector('.back-button');
    backButton.addEventListener("click", backButtonHandler);

    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', searchbarshow);

    const refreshButton = document.querySelector('.refresh-button');
    refreshButton.addEventListener('click', refresh);

    const searchText = document.querySelector('.search-bar');
    searchText.addEventListener('input', searchtext);

    const closeMsgButton = document.querySelector('.close-msg');
    closeMsgButton.addEventListener('click', closeMsg);


}