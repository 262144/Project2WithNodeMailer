$(document).ready(function() {

	var firstNameInput = $("#first-name");
	var lastNameInput = $("#last-name");
	var emailInput = $("#email");
	var passwordInput = $("#password");
	var newAccount = $("#new-account");

	$(newAccount).on("submit", createAccount);

	function createAccount(event){
		event.preventDefault();
			if(!firstNameInput.val().trim() || !lastNameInput.val().trim() || !emailInput.val().trim() || !passwordInput.val().trim()) {
			alert('Please check that you have filled in each field.');
			return;
		}

		var newCustomer = {
			first_name: firstNameInput.val().trim(),
			last_name: lastNameInput.val().trim(),
			email: emailInput.val().trim(),
			password: passwordInput.val().trim(),
		};
		submitCustomer(newCustomer);
	} // end of createAccount()


	function submitCustomer(customer) {
		$.post("/api/customers", customer, function(){
			console.log("a new customer has been submitted.")
		});
		console.log('the preliminary email address is ' + customer.email)
		goToApptPage(customer.email);
	}

function goToApptPage(email){
	console.log('Saturday morning the new customers email is ' + email);
	var url = '/make-appt?' + emailInput.val().trim();
		console.log('here is the url: ' + url);
		apptRedirect(url);
}





function apptRedirect(url){
	window.location.href = url;
}


}); // end document.ready