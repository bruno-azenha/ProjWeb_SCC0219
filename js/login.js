$(document).ready(function() {
	
	$("#email").focusout(function(event){
		var email = $("#email");
		if (validaEmail(email) == false) {
			displayError(email,"invalid e-mail");
		}
		else {
			removeError(email);
		}
	})

	$("#submit").submit(function(event){
		var email = $("#email");
		if (!validaEmail(email)) {
			
			event.preventDefault();
		}
		
	});		
})
