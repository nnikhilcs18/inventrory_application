export function navHandler(){
    const navLabels = document.querySelectorAll('.nav-label');
    for (const label of navLabels){
        label.classList.toggle('hide');
    }
    const menu=document.querySelector('.menu');
    menu.classList.toggle('menu-shrink');

}
export function navToDashboard(){
    window.location.href = "../inventoryDashboard/inventoryDashboard.html";
}
export function navToUsers(){
    window.location.href ="../UserManagement/userManagement.html";
}
export function navToReports(){
    window.location.href="../InventoryReport/inventoryReportIndex.html";
}
export function navToSettings(){
    window.location.href="../ApplicationSettings/applicationSettings.html";
}

// can be removed
// Drop Down for settings in nav bar

export function toggleDropdown() {
    const ul = document.querySelector('.menu-bar');
    const settingsSubNav = ul.children[ul.children.length - 1];
    settingsSubNav.classList.toggle('hide');
    const chevronButton = document.querySelector('.chevron-button');
    chevronButton.children[0].classList.toggle('hide');
    chevronButton.children[1].classList.toggle('hide');
}