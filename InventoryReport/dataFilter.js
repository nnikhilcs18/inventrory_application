 
import memory from "../utils/memory.js";
 
export function dataFilter() {

    

    const resourceOptions = document.getElementById('resource-type-id');
    const filterData = new Set();
    for (const item of memory.reports) filterData.add(item.type);
    for (const units of filterData) {
        const options = document.createElement('option');
        options.innerText = units;
       
        resourceOptions.appendChild(options);
    }
}

