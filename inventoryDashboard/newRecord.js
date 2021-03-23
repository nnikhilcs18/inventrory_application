import {
    addRow
} from "./addRow.js"

export function addUnit() {
    const rightPopUp = document.querySelector('.right-popup');
    rightPopUp.classList.add('right-popup-shown');

    const mainele = document.querySelector('.main');
    mainele.classList.add('disable-color','disable-color');
    const navEle = document.querySelector('nav');
    navEle.classList.add('disable-events');

    const buttons = document.querySelectorAll('.content-header button');
    for (const button of buttons) {
        button.classList.add('change-btn-color');
    }
}

export function saveHandler(event) {

    event.preventDefault();

    const deviceType = document.querySelector('.form-add-device-list').value;
    const deviceName = document.querySelector('.form-device-name').value;
    const deviceSerial = document.querySelector('.form-device-serial').value;
    const deviceStatus = document.querySelector('.form-device-status').value;
    const deviceAssigned = document.querySelector('.form-add-assigned').value;
    const deviceFrom = document.querySelector('.form-device-from').value;


    let fromDate;
    if(deviceFrom){
        fromDate=new Date(deviceFrom);
        fromDate=`${fromDate.getDate()} ${fromDate.toLocaleString('en-us',{month:'long'})} ${fromDate.getFullYear()}`;
    }
    else{
        fromDate="";
    }
    const columnHeaders = ["status", "serial", "type", "name", "assignedto", "from"];

    let device = new Object();

    device = {
        status: deviceStatus,
        serial: deviceSerial,
        type: deviceType,
        name: deviceName,
        assignedto: deviceAssigned,
        from: fromDate
    };
    
    validateForm(deviceName, deviceSerial);

    if (deviceName && deviceSerial) {

        addRow(columnHeaders, device);
        
        $.ajax({
            type: 'POST',
            url: 'https://inventorydb-0ecc.restdb.io/rest/units',
            headers: {
                "x-apikey": "6038d03110f29b640ed97b20"
            },
            data: {
                status: deviceStatus,
                serial: deviceSerial,
                type: deviceType,
                name: deviceName,
                assignedto: deviceAssigned,
                from: fromDate
            },
            success: function(){
                const successElement =document.querySelector('.successfull-creation');
                successElement.classList.remove('hide');
                const successMsg = document.querySelector('.success-msg')
                successMsg.append("Successfully created a new data");
                const addForm = document.querySelector('.add-form');
                addForm.reset();
            },
            error: function(){
                const successElement =document.querySelector('.successfull-creation');
                successElement.classList.remove('hide','successfull-creation');
                const successMsg = document.querySelector('.success-msg')
                successElement.classList.add('unsuccessfull-creation');
                successMsg.append("Couldn't create a new record,please try again");
            }
        });

    }
}


function validateForm(deviceName, deviceSerial) {
    const name = document.querySelector('.name');
    const serial = document.querySelector('.serial');

    if (document.querySelector('.name span')) {
        document.querySelector('.name span').remove();
    }

    if (document.querySelector('.serial span')) {
        document.querySelector('.serial span').remove();
    }
    if ((deviceName == "") || (deviceSerial == "")) {
        if (deviceSerial === "") {

            const requiredMsg=document.createElement('span');
            requiredMsg.append(" (Required)");
            requiredMsg.classList.add('required-field');
            document.querySelector('.serial').appendChild(requiredMsg);
        }
        if (deviceName === "") {
            const requiredMsg=document.createElement('span');
            requiredMsg.append(" (Required)");
            requiredMsg.classList.add('required-field');
            document.querySelector('.name').appendChild(requiredMsg);
            
        }
    }
}

export function closePopUp(event) {
    event.preventDefault();

    checkErrorMsg();

    const rightPopUp = document.querySelector('.right-popup');
    rightPopUp.classList.remove('right-popup-shown');

    const mainEle = document.querySelector('.main');
    mainEle.classList.remove('disable-events','disable-color');
    const navEle = document.querySelector('nav');
    navEle.classList.remove('disable-events');

    const buttons = document.querySelectorAll('.content-header button');
    for (const button of buttons) {
        button.classList.remove('change-btn-color');
    }
}
export function resetForm(event) {
    event.preventDefault();
    checkErrorMsg();
    document.querySelector('form').reset();

}
export function closeMsg(event) {
    event.preventDefault();
    const successElement =document.querySelector('.successfull-creation');
    successElement.classList.add('hide');
}
function checkErrorMsg(){
    const name = document.querySelector('.name');
    const serial = document.querySelector('.serial');

    if (document.querySelector('.name span')) {
        document.querySelector('.name span').remove();
    }

    if (document.querySelector('.serial span')) {
        document.querySelector('.serial span').remove();
    }
}