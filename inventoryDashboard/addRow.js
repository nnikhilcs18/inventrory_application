import {
    statusStyling
} from "../utils/utility.js";

export function addRow(columnHeaders, deviceDetails) {
    const mainTable = document.querySelector('.main-content');
    let row = document.createElement('div');
    row.classList.add('row-structure');
    row.classList.add('device');
    
    // wrenchIcon is present in the UI prototype but it's not present in the database,so as of now just appending some empty space
    let wrenchIcon = document.createElement("div");
    wrenchIcon.classList.add('mobile-hidden');
    row.append(wrenchIcon);

    for (const columnHeader of columnHeaders) {
        let elementName = document.createElement("div");
        elementName.append(deviceDetails[columnHeader]);
        if (columnHeader === "status") {
            statusStyling(elementName, deviceDetails[columnHeader]);
        }
        if(columnHeader==="serial" || columnHeader==="name" || columnHeader==="from"){
            elementName.classList.add('mobile-hidden');
        }
        elementName.classList.add('device-' + columnHeader);
        row.append(elementName);
    }
    mainTable.appendChild(row);
}