import {
    navHandler,
    navToDashboard,
    navToUsers,
    navToReports,
    navToSettings

} from "./navHandler.js"
import {
    getUserName
} from "./utility.js";
import{
    logOut
} from "./logOut.js";
export function loadComponents(){
    $('header').load('../components/header.html', function () {
        
        const navButton = document.querySelector('.nav-button');
        navButton.addEventListener('click', navHandler);
        getUserName();

        const logOutButton = document.querySelector('.log-out');
        logOutButton.addEventListener('click',logOut);
    });
    
    $('.menu').load('../components/nav.html', function () {
        const navDashboard = document.querySelector('.nav-dashboard');
        navDashboard.addEventListener('click', navToDashboard);

        const navUsers = document.querySelector('.nav-users');
        navUsers.addEventListener('click', navToUsers);

        const navReports = document.querySelector('.nav-reports');
        navReports.addEventListener('click', navToReports);

        const settings = document.querySelector('.nav-settings');
        settings.addEventListener('click', navToSettings);
        settings.classList.add('selected');
        
    });

}