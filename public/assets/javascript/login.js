$(document).ready(function() {

	var emailInput = $("#email");
	var passwordInput = $("#password");
	var newAccount = $("#log-in");

	$(newAccount).on("submit", validate);



	function validate(event){
		event.preventDefault();

		if(!emailInput.val().trim() || !passwordInput.val().trim()) {
			alert('Please check that you have filled in each field.');
			return;
		}
		console.log('it worked');
		var customer = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim(),
		};
		checkForCustomer(customer);
//end of validate function
}

function checkForCustomer(customer){
	console.log('The entered customers password is ' + customer.password);
	var custQueryUrl = '/validate/' + customer.email;
	console.log('custQueryUrl is ' + custQueryUrl);
	$.get(custQueryUrl, function(data) {
		console.log('The entered customers password is ' + customer.password);
		console.log('the customers password is ' + customer.password);
		if(!data){
			alert('OOPS! We cannot find the email address ' + customer.email + ' in our records.  Please try again or create an account.')
			return;
		} if(customer.password != data.password){
			alert('The password or email you entered were incorrect.  Please try again.')
		}
	});
}








//end of document.ready function
});