import {
    fetchData
} from "../utils/utility.js";

import {
    showData
} from "./showData.js";

import memory from "../utils/memory.js";

export function refresh() {
    let element = document.querySelector('.main img');
    element.classList.remove('hide');

    const mainContent = document.querySelector('.main-content');
    const rows = document.querySelectorAll('.device');
    for (const i of rows) {
        mainContent.removeChild(i);
    }

    fetchData('https://inventorydb-0ecc.restdb.io/rest/units').then((responseData) => {
        let element = document.querySelector('.main img');
        element.classList.add('hide');
        showData(responseData);
        memory.units = responseData;
    });
}