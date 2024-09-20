function validacion(){
    let username = document.getElementById("username").value; //creamos variables con los nombres para que guarden la informacion del input en el html.
    let passwordUser = document.getElementById("passwordUser").value;
 
    //USERNAME

    if(username == "") {
        alert("All the fields must be filled.");
        return false;
    } 

    if(username.length < 8 || username.length > 20) {
        alert("The username must have between 8 and 20 characters.");
        return false;
    }

    //------------------------------------------------------------------------------------------------------

    //PASSWORD

    if(passwordUser == "") {
        alert("All the fields must be filled.");
        return false;
    }

    if(passwordUser.length < 8 || passwordUser.length > 20) {
        alert("The password must have between 8 and 20 characters.");
        return false;
    }

    alert("Your log-in session has been succesfully completed!");
    alert("Welcome " + username + "!! Don't forget your password is: " + passwordUser);
    return true; //si todos los ifs no se ejecutan entonces permite que la form sea 'enviada'

}

// JavaScript file for form validation
document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Basic validation to ensure username and password meet basic criteria
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Checking minimum length for username and password
    if (username.length < 5) {
        alert("Username must be at least 5 characters long.");
        event.preventDefault(); // Prevent form submission
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault(); // Prevent form submission
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        alert("Password must contain at least one uppercase letter and one number.");
        event.preventDefault(); // Prevent form submission
    }
});