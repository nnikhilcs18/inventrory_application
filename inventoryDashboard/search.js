import {
    addRow
} from "./addRow.js";

import memory from "../utils/memory.js";

export function searchbarshow() {
    const searchbar = document.querySelector('.search-bar');
    searchbar.classList.remove('hide');
    const contentHeaderLeft = document.querySelector('.content-header-left');
    contentHeaderLeft.classList.add('hide');
    const contentHeaderRight = document.querySelector('.content-header-right');
    contentHeaderRight.classList.add('hide');
    const backBtn = document.querySelector('.back-button');
    backBtn.classList.remove('hide');
}
export function searchtext(event) {
    const mainElement = document.querySelector('.main-content div');
    mainElement.remove();
   
    const searchTxt = event.target.value.toLowerCase();
    let searchedRows = [];
    searchedRows = memory.units.filter(unit => {
        const name = unit.name.toLowerCase();
        const type = unit.type.toLowerCase();
        if ((name.includes(searchTxt)) || (type.includes(searchTxt)))
            return unit;
    })
    
    showSearchResults(searchedRows);
}

function showSearchResults(searchedRows) {
    const columnHeaders = ["status", "serial", "type", "name", "assignedto", "from"];
    const mainContent = document.querySelector('.main-content');

    const rows = document.querySelectorAll('.device');
    for (const i of rows) {
        mainContent.removeChild(i);
    }
    if(searchedRows.length===0){

        const mainElement = document.querySelector('.main-content');
        const searchMsg=document.createElement('div');
        searchMsg.classList.add('search-msg','msg-box');
        searchMsg.append("No results found!");
        mainElement.appendChild(searchMsg);
    }
    for (const row of searchedRows) {
        addRow(columnHeaders, row);
    }
}
export function backButtonHandler() {
    const searchbar = document.querySelector('.search-bar');
    searchbar.classList.add('hide');
    const contentHeaderLeft = document.querySelector('.content-header-left');
    contentHeaderLeft.classList.remove('hide');
    const contentHeaderRight = document.querySelector('.content-header-right');
    contentHeaderRight.classList.remove('hide');
    const backBtn = document.querySelector('.back-button');
    backBtn.classList.add('hide');
}