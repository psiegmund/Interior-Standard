let inputFirstname = document.getElementById('input-name');
let inputEmail = document.getElementById('input-email');
let inputMsg = document.getElementById('input-text');


function submitForm() {
    let firstname = inputFirstname.value;
    let email = inputEmail.value;
    let msg = inputMsg.value;
    console.log(firstname);
    console.log(email);
    console.log(msg);
}