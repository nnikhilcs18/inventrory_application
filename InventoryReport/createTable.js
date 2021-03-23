
import memory from "../utils/memory.js";

export function loadTable() {
    const listOfItems = document.querySelector(".entryForTable");
    listOfItems.innerHTML = "";
    createTable();
}

function checkCondition(status, statusSearch, itemType, resourceType) {

    

    let flag1 = false;
    let flag2 = false;
    if (status === statusSearch || statusSearch === "Added") flag1 = true;
    if (itemType === resourceType || resourceType === "All Units") flag2 = true;
    return (flag1 && flag2);
    
}

export function createTable() {

  
    let unitCount = 0;
    const statusSearch = document.querySelector(".statusSelect").value;
    const resourceType = document.querySelector(".resourceType").value;
    for (const item of memory.reports) {
        if (checkCondition(item.status, statusSearch, item.type, resourceType)) {
          const   tableDiv = document.createElement('div');
            tableDiv.setAttribute("class", "horizontalBar")

            const statusDiv = document.createElement('div');
            const statusBody = document.createElement('span');
            const convertIntoLower = item.status.toLowerCase();
            statusBody.setAttribute("class", convertIntoLower);
            statusBody.append(item.status);
            statusDiv.appendChild(statusBody);

            const serialDiv = document.createElement('div');
            serialDiv.append(item.serial);

            const typeDiv = document.createElement('div');
            typeDiv.append(item.type);

            const nameDiv = document.createElement('div');
            nameDiv.append(item.name);

            const assignedToDiv = document.createElement('div');
            assignedToDiv.append(item.assignedto);

            const fromDiv = document.createElement('div');
            fromDiv.append(item.from);
            tableDiv.append(statusDiv, serialDiv, typeDiv, nameDiv, assignedToDiv, fromDiv);
            document.querySelector('.entryForTable').appendChild(tableDiv);
            unitCount++;
        }
    }
    const divCount = document.querySelector(".unitCounter");
    divCount.innerHTML = `All Units : ${unitCount}`;
}

