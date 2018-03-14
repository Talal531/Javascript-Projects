var getUserName = document.getElementById('registerUser');
var getPassword = document.getElementById('registerPassword');
var getEmail = document.getElementById('registerEmail');
var register_btn = document.getElementById('register_btn');
var login_btn = document.getElementById('login_btn');

var regster_msg = document.getElementById('regster_msg');

var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var passwordError = document.getElementById('passwordError');

// function userNameValidation() {
//     if (getUserName.value == '') {
// nameError.innerHTML = "* Please Enter Your Name";
// getUserName.style.borderColor = "#f00";
// return false;
// } else {
//     getUserName.style.border = '';
//nameError.innerHTML = '';
//     }
// }

// function emailValidation() {
//     if (getEmail.value == '') {
// emailError.innerHTML = "* Please Enter Your Email";
//     getEmail.style.borderColor = "#f00";
//     return false;
// } else {
//     getEmail.style.border = '';
// emailError.innerHTML = '';
// }
// }

// function passwordValidaion() {
// if (getPassword.value == '') {
//  passwordError.innerHTML = "* Please Enter Your Password";
// getPassword.style.borderColor = "#f00";
//return false;
// } else {
//     getPassword.style.border = '';
//passwordError.innerHTML = '';
//     }
// }


// getUserName.addEventListener('blur', userNameValidation, false);
// getEmail.addEventListener('blur', emailValidation, false);
// getPassword.addEventListener('blur', passwordValidaion, false);


// console.log(nameError.innerHTML)

function register() {
    if (getUserName.value == '') {
        nameError.innerHTML = "* Please Enter Your Name";
        getUserName.style.borderColor = "#f00";


    } else if (getEmail.value == '') {
        emailError.innerHTML = "* Please Enter Your Email";
        getEmail.style.borderColor = "#f00";

    } else if (getPassword.value == '') {
        passwordError.innerHTML = "* Please Enter Your Password";
        getPassword.style.borderColor = "#f00";

    } else {

        var newUser = {
            userName: getUserName.value,
            email: getEmail.value,
            password: getPassword.value

        };
        // console.log(newUser.email)

        var users = localStorage.getItem("users");
        var userExist = false;

        if (users === null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }
        for (var i = 0; i < users.length; i++) {
            if (users[i].userName === getUserName.value || users[i].email === getEmail.value) {
                userExist = true;
            }
        }
        if (userExist === true) {
            alert('This user name or email address already exist');
        } else {
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registerd, You can now login');
            // register_msg.style.display = "block";
            // regster_msg.innerHTML = "Successfully Registered, You can now login";
            getUserName.value = '';
            getPassword.value = '';
            getEmail.value = '';
            displaySignInForm();
        }
    }



}

function displaySignInForm() {
    var registerForm = document.getElementById('register');
    var signInForm = document.getElementById('signIn');

    registerForm.style.display = "none";
    signInForm.style.display = "block";
}


function displayRegisterForm() {
    var registerForm = document.getElementById('register');
    var signInForm = document.getElementById('signIn');

    registerForm.style.display = "block";
    signInForm.style.display = "none";
}



function login() {
    var userName = document.getElementById('userName');
    var userEmail = document.getElementById('emailId');
    var userPassword = document.getElementById('userPassword');
    var users = localStorage.getItem('users');
    var login_msg = document.getElementById('login_msg');

    var showName = document.getElementById('showName');

    // console.log(users)
    if (users === null) {
        alert('please register your account first');
    } else {
        var users = JSON.parse(users);
    }
    // console.log(users)
    for (var i = 0; i < users.length; i++) {
        if (userName.value === users[i].userName && userEmail.value === users[i].email && userPassword.value === users[i].password) {

            // alert(userName.value, ' successfully loged in');
            // login_msg.style.display = "block";
            // login_msg.innerHTML = "Successfully loged in";
            userEmail.value = '';
            userPassword.value = '';
            window.location = 'instruction.html';
            return;
        }
    }
    alert('Wrong user Name or password')

}