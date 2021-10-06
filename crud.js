var firstname, lastname, username, email, password, confirmpass;
function readFom() {
    firstname = document.getElementById("First Name").value;
    lastname = document.getElementById("Last Name").value;
    username = document.getElementById("Username").value;
    email = document.getElementById("Email").value;
    password = document.getElementById("Password").value;
    confirmpass = document.getElementById("Confirm Password").value;
    console.log(firstname, lastname, username, email, password, confirmpass);
}
document.getElementById("Signup").onclick = function () {
    readFom();
    firebase.database().ref("user" + email)
        .set({
            fname: firstname,
            lname: lastname,
            usrname: username,
            email: email,
            pass: password,
            confpass: confirmpass
        });
    alert("welcome, ur account succesfully singup")
    document.getElementById("First Name").value = " ";
    document.getElementById("Last Name").value = " ";
    document.getElementById("Username").value = " ";
    document.getElementById("Email").value = " ";
    document.getElementById("Password").value = "";
    document.getElementById("Confirm Password").value = " ";
};

document.getElementById("Login").onclick = function () {
    readFom();
    firebase.database().ref("user" + email)
        .on("email/username", function (snap) {
            document.getElementById("First Name").value = snap.val().firstname;
            document.getElementById("Last Name").value = " ";
            document.getElementById("Username").value = " ";
            document.getElementById("Email").value = " ";
            document.getElementById("Password").value = "";
            document.getElementById("Confirm Password").value = " ";
        });
};