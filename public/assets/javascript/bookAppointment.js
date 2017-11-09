$(document).ready(function() {

    var appointments = [];
    var employees = [];
    var selectedDate;
    var url = window.location.href;
    var customerId = url.slice(url.indexOf("?")+1);
    getServices(); // calls api to retrieve appointments and employee list

    $("#date").change(function() {
        $("#serviceSelect").hide();
        $("#employeeSelect").hide();
        $("#timeSelect").hide();
        if (this.value != undefined) {
            selectedDate = new Date(this.value.replace(/-/g, "/"));
            console.log(selectedDate)
            $("#service").empty();
            $("#service").append('<option value="" selected="selected">Select One</option>');
            var services = [];
            employees.map(function(employee) {
                var isDuplicateService = services.filter(function(service) {
                    return service.service == employee.Role.service;
                }).length > 0;

                if (isDuplicateService == false) {
                    services.push({
                        roleId: employee.RoleId,
                        service: employee.Role.service
                    });
                    $("#service")
                        .append('<option value=' + employee.RoleId + '>' +
                            employee.Role.service + '</option>');
                }
            });
            $("#serviceSelect").show();
        }
    });

    $("#service").change(function() {
        $("#employeeSelect").hide();
        $("#timeSelect").hide();
        if (this.value != undefined) {
            $("#employee").empty();
            $("#employee").append('<option value="" selected="selected">Select One</option>');
            employees.map(function(employee) {
                var selectedService = $("#service").val();
                if (selectedService == employee.RoleId) {
                    $("#employee")
                        .append('<option value=' + employee.id + '>' +
                            employee.firstName + '</option>');
                }
            });
            $("#employeeSelect").show();
        }
    });

    $("#employee").change(function() {
        $("#timeSelect").hide();
        if (this.value != undefined) {
            var employeeId = $("#employee").val();
            $("#time").empty();
            $("#time").append('<option value="" selected="selected">Select One</option>');
            var bookedTimes = appointments.filter(function(appointment) {
                if (employeeId == appointment.EmployeeId) {
                    var appointmentDate = new Date(appointment.appointmentTime);
                    return selectedDate.toDateString() === appointmentDate.toDateString();
                }
            }).map(function(bookedTime) { return new Date(bookedTime.appointmentTime).getHours(); });

            var dailyTimeSlots = getDailyTimeSlots();

            var availableTimeSlots = dailyTimeSlots.filter(function(timeSlot) {
                return bookedTimes.indexOf(timeSlot.getHours()) === -1;
            });

            for (i = 0; i < availableTimeSlots.length; i++) {
                $("#time").append('<option value=' + availableTimeSlots[i].getHours() + '>' + format_time(availableTimeSlots[i]) + '</option>')
            };

            $("#timeSelect").show();
        }
    });

    $("#time").change(function() {
        if (this.value != undefined) {
            $("#messageEntry").show();
            $("#submitButton").show();
        }
    });

    $("#submitButton").click(function(e) {
        e.preventDefault();
        selectedDate.setTime(selectedDate.getTime() + ($("#time").val() * 60 * 60 * 1000));
        $.ajax({
                method: "POST",
                url: "/api/createappointment",
                data: {
                    appointmentTime: selectedDate,
                    message: $("#message").val(),
                    CustomerId: customerId,
                    EmployeeId: $("#employee").val()
                }
            })
            .done(function(res) {
                sendIt();
                console.log(res);
            });
    });


    function getDailyTimeSlots() {
        var dailyTimeSlots = [];
        for (var i = 9; i < 17; i++) {
            var apptTimeSlot = new Date(selectedDate.getYear(),
                selectedDate.getMonth(),
                selectedDate.getDate(),
                i);
            dailyTimeSlots.push(apptTimeSlot);
        }
        return dailyTimeSlots;
    }

    function format_time(date_obj) { // outputs date in format "4:00pm"
        var hour = date_obj.getHours();
        var minute = date_obj.getMinutes();
        var amPM = (hour > 11) ? "pm" : "am";
        if (hour > 12) {
            hour -= 12;
        } else if (hour == 0) {
            hour = "12";
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        return hour + ":" + minute + amPM;
    }

    function getServices() {
        $.get("api/allappointments", function(res) {
            appointments = res.appointments;
            employees = res.employeeRoles;
        });
    }

    function sendIt() {
        $.post("/sendIt/" + customerId, function(req, res) {
            window.location.href = '/thank-you';
        });
    }
});