// login button 

document.getElementById("login-submit").addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // if (userEmail == 'sara@gmail.com' && userPassword == 'sara') {
    //     window.location.href = 'banking.html';
    // }

    window.location.href = 'banking.html';

})