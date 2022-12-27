var API_URL = "http://localhost:8080/api/user/list";

//var request;
const inpUser = document.getElementById("user");
const inpPsw = document.getElementById("psw");
const email = document.getElementById('email');
const logBtn = document.getElementById("logbtn");
const logsignBut= document.getElementById('btnSign');
const signbtn = document.getElementById('btnup');
const table= document.getElementById("table");

window.onload = async function () {
  //request = new XMLHttpRequest();

  //const data = await fetchData();
};
/*(function test() {
  console.log(“Getin dataz”);
  fetch(API_URL, { mode: “no-cors” })
    //.then((response) => response.json())
    .then((data) => {
      console.log(data[0][0]);
    });
})();*/
logBtn.onclick=function(event){
    event.preventDefault();
    console.log('hello im under the water')
    searchUser();

}
logsignBut.onclick=function(event){
    event.preventDefault();
    console.log('hello im under the water')
    searchUser();

}

async function register(){
    let inputUser = inpUser.value;
    let inputPsw = inpPsw.value;
    let inputEmail= email.value;
    const response = await (fetch('http://localhost:8080/api/addUser',{
        method: 'POST',
        body: JSON.stringify({
            userName: inpUser,
            email: inputEmail,
            password:inpPsw
        })
    }))

}
function searchUser() {
  fetch(`http://localhost:8080/api/user/list`)
    .then((response) => response.json())
    .then(data=>validateLog(data))
}
function validateLog(data){
    console.log(data)
    let inputUser = inpUser.value;
    let inputPsw = inpPsw.value;
    const err = document.getElementById("error")
    data.forEach((element) => {
        if(inputUser===element.userName&&inputPsw===element.password){
          console.log("success")
          location.href="index.html"
        }
        else{
            err.innerHTML= "<p>Login Invalid</p>"
        }
    })
}

   




// function check (){
//   const shit = inp.value
//   const newDiv = document.createElement(“div”);
// const fetchData = async () => {
//   const api = `http://localhost:8080/api/user/list`; //change SIGN;
//   const response = await fetch(api);
//   const data = await response.json();
//   console.log(shit)
//    if(shit !== data.userName){
//     data.item.forEach(element => {
//       newDiv.innerHTML += `<p>jdnfsdkh${element.userName}</p>`
//     });
//    }
//   //console.log(data)
//   if (!response.ok) {
//     throw new Error(data.message); // throwing inside async rejects the returned promise
//   }
//   return data;
// };
// }
// inp.addEventListener("keypress",function(event){
//   if(event.key==="Enter"){
//     event.preventDefault();
//     inp.innerHTML ="";
//     console.log("shit")
//     searchUser();
//   }
// });