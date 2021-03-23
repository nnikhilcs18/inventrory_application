let formRow;
export function formUpdate() {
    let parentRow = this;
    let serial = document.querySelector(".popup-header-left>span");
    let typeSerial = parentRow.children[1].innerText + " " + parentRow.children[2].innerText;
    serial.innerText = typeSerial;
  
    serial = document.querySelector(".popup-header-left-form>span")
    serial.innerText = typeSerial;
  
    formRow = parentRow;
  }

  export function editUserSubmit(event) {
  
    event.preventDefault();
  
    let serial = document.querySelector('#txtSerial');
    let userName = document.querySelector('#txtName');
    let dateFrom = document.querySelector('#txtFrom');
  
    if( !serial.value || !userName.value || !dateFrom.value){
        alert("Fill the details");
    }
    else{

      formRow.children[2].innerText = serial.value;
      formRow.children[3].innerText = userName.value;
      formRow.children[4].innerText = dateFrom.value;

      let frm = document.getElementById('editForm');
      frm.reset();
    }
  }