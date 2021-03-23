import {
    getResources
} from "./getResources.js"

export function showData(res) {

    let mainDiv = document.querySelector('.users-contacts');
    mainDiv.innerHTML = "";

    let allUsers = [];
    for (let i of res) {
        let found = allUsers.find(user => user.username === i.username)
        if (!found)
            allUsers.push(i)
    }

    let count = 0;
    for (let users of allUsers) {

        let usrName = document.createElement('div');
        usrName.className = "name";
        usrName.append(users.username);

        let usrMail = document.createElement('div');
        usrMail.className = "gmail-id";
        usrMail.append(users.email);

        let usr = document.createElement('div');
        usr.className = "users-gmail";
        if (count === 0) {
            usr.classList.add("users-gmail-hovered");
            count++;
        }
        usr.append(usrName, usrMail);
        usr.addEventListener('click', getResources);

        mainDiv.appendChild(usr);
    }
}