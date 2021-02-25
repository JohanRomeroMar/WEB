function validarPass(){
    var p1 = document.getElementById("Password").value;
    var p2 = document.getElementById("PasswordCon").value;

    var espacios = false;
    var cont = 0;

    while (!espacios && (cont < p1.length)) {
    if (p1.charAt(cont) == " ")
        espacios = true;
    cont++;
    }
    
    if (espacios) {
        document.getElementById("PasswordL").innerHTML = "La contraseña no puede contener espacios";
        document.getElementById("PasswordL").style.color="red";
    return false;
    }

    if (p1 != p2) {
        document.getElementById("PasswordL").innerHTML = "Las contraseñas deben coincidir";
        document.getElementById("PasswordL").style.color="red";
        return false;
    } else {
        document.getElementById("PasswordL").innerHTML = "";
        return true; 
    }
}
