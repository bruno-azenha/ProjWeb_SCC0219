$(document).ready(function() {
	
	$("#email").focusout(function(event){
		var email = $("#email");
		if (validaEmail(email) == false) {
			displayError(email,"invalid e-mail");
		}
		else {
			removeError(email);
		}
	});

	$("#submit").click(function(event){
		var email = $("#email");
		if (validaEmail(email) == false) {
			displayError(email,"invalid e-mail");
			return false;
		}
		else {
			removeError(email);
		}
	});		
});
