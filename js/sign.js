const inpUser = document.getElementById("user");
const inpPsw = document.getElementById("psw");
const email = document.getElementById('email');
const signbtn = document.getElementById('btnup');
const success = document.getElementById('success')
const error = document.getElementById('error')

signbtn.onclick=function(event){
    event.preventDefault();
    console.log('hello im under the water')
   register();
   success.innerHTML= "<p>Success</p>"
   location.href="index.html"

}



async function register(){
    let inputUser = inpUser.value;
    let inputPsw = inpPsw.value;
    let inputEmail= email.value;
    const response = await fetch('http://localhost:8080/api/user/addUser',{
        method: 'POST',
        body: JSON.stringify({
            userName: inputUser,
            email: inputEmail,
            password:inputPsw
        })
    })
    return response.json();

}