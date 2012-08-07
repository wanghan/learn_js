//Auto-fill ECP logon form

function autofill() {

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    usernameInput.value = "administrator";

    if (location.hostname.trim().indexOf("bj") >= 0) {
        passwordInput.value = "J$p1ter";
    }
    else {
        passwordInput.value = "T%nt0wn";
    }

    var submitInput = document.getElementsByName("logonForm");
    submitInput[0].submit();
}
autofill();
