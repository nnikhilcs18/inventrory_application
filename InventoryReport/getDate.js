 import {createTable} from "./createTable.js";
import memory from "../utils/memory.js";
 
 export function getDate(){
    const tableEntry = document.querySelector(".entryForTable");
    let unitCount = 0;

   
    document.querySelector(".unitCounter").innerText = `All units:  ${unitCount}`;
    while (tableEntry.firstChild) {
      tableEntry.removeChild(tableEntry.firstChild);
    }
    for(let unit of memory.reports){

      

      let dateTosearch=new Date(unit.from);
  
      

      if(CheckDate(dateTosearch)){
        unitCount++;
        createTable(unit);
      }
  
    }
    document.querySelector(".unitCounter").append(unitCount)
  
  }
  function CheckDate(start){
    const fromDate=document.getElementById("from-date").value;
    const toDate=document.getElementById("to-date").value;

    
    const searchedFromDate=new Date(fromDate);
    const searchedToDate=new Date(toDate);
    
    return(((start>searchedFromDate)||(start===searchedFromDate))&&((start<searchedToDate)||(start===searchedToDate)));
  
  }
  