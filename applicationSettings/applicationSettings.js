window.addEventListener('DOMContentLoaded', init);


import {
  loadComponents
} from "../utils/loadComponents.js"

import {
  fetchData,
  getUserName
} from "../utils/utility.js";
import memory from "../utils/memory.js";

import { createParts } from "./addParts.js";
import { createProperties } from "./addProperties.js";
function init() {

  //checking if user logged in
  if (Cookies.get('LoggedIn') == null) {
    window.location.href = '../SignIn/signIn.html';
  }

  // loading the components
  loadComponents();

}
//fetching the data from restdb
let parent = "";
fetchData('https://inventorydb-0ecc.restdb.io/rest/unittypes').then(res => {
  let element = document.querySelector('.user img');
  element.classList.add('hide');

  if (res.length === 0) {
    const details = document.querySelector('.details');
    details.classList.add('hide');
    document.querySelector('.user').classList.add('hide');
    const msgElement = document.querySelector('.error-msg');
    msgElement.classList.add('invalid-fetch-data');
    msgElement.append("Something Went Wrong!");

  }

  memory.settings = res;
  displayData(res);
});

function displayData(res) {
  let userList = document.querySelector('.user-list');
  let count = 0;
  for (let i of res) {
    let span = document.createElement('span');
    span.className = 'type';

    span.innerText = i.unitname;

    let div = document.createElement('div');
    div.className = 'each-person';
    if (count === 0) {
      count++;
      div.classList.add('first-person');
    }
    div.classList.add('first-person');

    div.append(span);
    div.addEventListener('click', onSave);

    userList.append(div);
  }

}

function onSave() {
  parent = this;
  let typeName = parent.children[0].innerText;

  for (let unit of memory.settings) {
    if (unit.unitname === typeName) {

      let unitName = document.querySelector('#name-box');
      unitName.value = unit.unitname;
      let shortname = document.querySelector('#shortName-box');
      shortname.value = unit.shortname;

      const iconBox = document.querySelector('.icon-lists');
      iconBox.selectedIndex = (+(unit.id) - 1);

      const comments = document.querySelector("#comments");
      comments.value = unit.comments;


    }
  }
}

let saveBtn = document.querySelector('.assign-unit');
saveBtn.addEventListener('click', onSubmit);
function onSubmit() {
  let newName = document.querySelector('#name-box').value;
  parent.children[0].innerText = newName;

}


//event listeners for add button  
let addPropertyBtn = document.querySelector('#property-btn');
addPropertyBtn.addEventListener('click', createProperties);
let addPartsBtn = document.querySelector('#part-btn');
addPartsBtn.addEventListener('click', createParts);


