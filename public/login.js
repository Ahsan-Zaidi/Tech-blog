const { use } = require("../controllers");

async function loginFormHandler(event) {
    event.preventDefault();

    //variables attatched to id of class 
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log ("usename"+username)
    console.log ("password"+password)

    //if login info is correct Post the content onto the dashboar
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            console.log(response);
        }
    }
}

//run on submit
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);