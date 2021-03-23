import {
    addRow
} from "./addRow.js";



export function showData(responseData) {
    for (const device of responseData) {

        const columnHeaders = ["status", "serial", "type", "name", "assignedto", "from"];

        addRow(columnHeaders, device);

        // to assign names to assigned-to dropdown list

        const assignedList = document.querySelector('.assigned-to-list');
        let optionElement = document.createElement('option');
        if (device.assignedto !== "") {
            optionElement.append(device.assignedto);
            assignedList.appendChild(optionElement);
        }

        // to assign device type to dropdown list
        const deviceDropdown = document.querySelector('.device-dropdown');
        let option = document.createElement('option');
        if (device.type !== "") {
            option.append(device.type);
            deviceDropdown.appendChild(option);
        }
    }

}