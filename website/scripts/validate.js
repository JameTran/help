function validateEmail(inputText) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailFormat) == null) {
        alert("You have entered an invalid email address!");
        return false;
    }
    else  
        return true;
}