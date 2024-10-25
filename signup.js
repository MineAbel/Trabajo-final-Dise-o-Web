function validacion(){
    let username = document.forms["form"]["username"].value; //creamos variables con los nombres para que guarden la informacion del input en el html.
    let passwordUser = document.forms["form"]["passwordUser"].value;

    if(username == "") {
        alert("All the fields must be filled.");
        return false;
    }

    if(passwordUser == "") {
        alert("All the fields must be filled.");
        return false;
    }

    alert("Your log-in session has been succesfully completed!");
    alert("Welcome " + username + "!! Don't forget your password is: " + passwordUser);
    return true; //si todos los ifs no se ejecutan entonces permite que la form sea 'enviada'

}