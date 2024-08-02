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