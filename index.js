function registrationForm() {
    let Name = document.getElementById('name').value;
    let Contact = document.getElementById('contact').value;
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    let Confirm_Password = document.getElementById('conf_pass').value;

    if (Name === "" || Contact === "" || Email === "" || Password === "" || Confirm_Password === "") {
        alert("All fields are mandatory to fill.");
        return false;
    } else if (Contact.length !== 11 || isNaN(Contact)) {
        alert("Contact number should be 11 digits long and numeric.");
        return false;
    } else if (Password !== Confirm_Password) {
        alert("Passwords do not match.");
        return false;
    } else {
        return true;
    }
}
