export function logOut(){
    
        Cookies.remove('LoggedIn');
        window.location.href ='../SignIn/signIn.html';
        
}