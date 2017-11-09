$(document).ready(function() {

    var firstNameInput = $("#firstName");
    var lastNameInput = $("#lastName");
    var emailInput = $("#email");
    var passwordInput = $("#password");
    var newAccount = $("#new-account");

    $(newAccount).on("submit", createAccount);

    function createAccount(event) {
        event.preventDefault();
        if (!firstNameInput.val().trim() || !lastNameInput.val().trim() || !emailInput.val().trim() || !passwordInput.val().trim()) {
            alert('Please check that you have filled in each field.');
            return;
        }
        var newCustomer = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
        };
        submitCustomer(newCustomer);
    } // end of createAccount()

    function submitCustomer(customer) {
        $.post("/api/customers", customer, function(res) {
            goToApptPage(res.id);
        });

    }
    function goToApptPage(id) {
        var url = '/make-appt?' + id;
        apptRedirect(url);
    }

    function apptRedirect(url) {
        window.location.href = url;
    }

}); // end document.ready