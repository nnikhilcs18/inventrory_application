import {
  fetchData
} from "../utils/utility.js";

if(Cookies.get('LoggedIn')!=null) { 
  window.location.href = '../inventoryDashboard/inventoryDashboard.html';
}

let userFound = false;

const regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
document.getElementById("validateUser").addEventListener('click', signIn)


function signIn(event){
  {

    event.preventDefault();

    let username = document.getElementById('username').value.toLowerCase();
    let password = document.getElementById('password').value;

    if (!regularExpression.test(password)) {
      
      document.getElementById('error').innerHTML = 'Password Must contain One uppercase,lowercase,symbol,number and minimum 8 characters';
      
    }

    fetchData('https://inventorydb-0ecc.restdb.io/rest/administrator').then(results => {
    
      for (let res of results) {
        if (res.name.toLowerCase() === username && res.password === password) {
          Cookies.set("LoggedIn", res.name, {
            expires: 1
          });
          userFound = true;
          break;
        }

      }
      if (userFound && regularExpression.test(password)) {
        window.location.href = '../inventoryDashboard/inventoryDashboard.html'
      } else if (!userFound && regularExpression.test(password)) {
        document.getElementById('error').innerHTML = 'Invalid user, Please try again!';
      }
      
      document.getElementById('username').addEventListener('input',deleteErrorMsg);
      document.getElementById('password').addEventListener('input',deleteErrorMsg);

      userFound = false;

      document.getElementById('password').value="";
      
    })
  }
}
function deleteErrorMsg(){
  document.getElementById('error').innerHTML="";
}

