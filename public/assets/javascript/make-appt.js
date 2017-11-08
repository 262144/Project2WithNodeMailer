$(document).ready(function() {
	var emailInput = $("#email");
	var dateInput = $("#date");
	var serviceInput = $("#service");
	var employeeInput = $("#employee");
	var timeInput = $("#time");
	var messageInput = $("#message");
	var newAppointment = $("#new-appointment");

	$(newAppointment).on("submit", createAppointment);

	function createAppointment(event){
		event.preventDefault();
		var newAppointment;
		var custId;
		var emplId;
		if(!emailInput.val().trim() || !dateInput.val().trim()|| !serviceInput.val().trim() || !employeeInput.val().trim() || !timeInput.val().trim()) {
			alert('Please check that you have filled in each required field.');
			return;
		}
		var custQueryUrl = '/api/email/' + emailInput.val().trim();
		console.log('here is the custQueryUrl: ' + custQueryUrl);

		var emplQueryUrl = '/api/last-name/' + employeeInput.val().trim();
		console.log('here is the emplQueryUrl: ' + emplQueryUrl);
			
		$.get(custQueryUrl, function(data) {
			custId = data.id;

			$.get(emplQueryUrl, function(data){
				emplId = data.id;
				console.log('the emplId1 variable is ' + emplId);

			});
			console.log('the emplId2 variable is ' + emplId);
			console.log('the custId variable is ' + custId);
			console.log('the id variable is ' + emailInput.val().trim());
			console.log('the id variable is ' + dateInput.val().trim());
			console.log('the id variable is ' + serviceInput.val().trim());
			console.log('the id variable is ' + employeeInput.val().trim());
			console.log('the id variable is ' + timeInput.val().trim());
			console.log('the id variable is ' + messageInput.val().trim());

		newAppointment = {
			date: dateInput.val().trim(),
			service: serviceInput.val().trim(),
			employee: employeeInput.val().trim(),
			appointmentTime: timeInput.val().trim(),
			message: messageInput.val().trim(),
			CustomerId: custId,
			EmployeeId: "1"
		};
	submitAppointment(newAppointment);
	});
} // end of createAccount()


	function submitAppointment(appointment) {
		$.post("/api/appointments", appointment, function(){
			console.log("a new appointment has been submitted.")
		});
	}

}); // end document.ready
