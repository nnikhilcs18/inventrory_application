 import {
     fetchData,
     getUserName
 } from "../utils/utility.js";
 import memory from "../utils/memory.js"

 import {
     dataFilter
 } from "./dataFilter.js"
 import {
     createTable
 } from "./createtable.js"

 import {
     loadTable
 } from "./createTable.js"
 import {
     getDate
 } from "./getDate.js"

 import {
     loadComponents
 } from "../utils/loadComponents.js"
 
 const fetchUrl = "https://inventorydb-0ecc.restdb.io/rest/reports";

 window.addEventListener('DOMContentLoaded', init);


 function init() {

     
     if (Cookies.get('LoggedIn') == null) {
         alert("User Not Logged in yet");
         window.location.href = '../SignIn/signIn.html';
     }

     
   loadComponents();




     fetchData(fetchUrl).then((data) => {
         let element = document.querySelector('.load-gif');
         element.classList.add('hide');
         if (!data.length) {

             const msg = document.querySelector('.error-msg');
             msg.classList.add('invalid-fetch-data');
             msg.append("Something went wrong");

         }
         memory.reports = data;
         createTable();
         dataFilter();

     })
     document.querySelector('.statusSelect').addEventListener("change", loadTable);
     document.querySelector('.resourceType').addEventListener("change", loadTable);


     const fromDate = document.getElementById("from-date", getDate);
     fromDate.addEventListener("change", getDate);
     const toDate = document.getElementById("to-date", getDate);
     toDate.addEventListener("change", getDate);

 }