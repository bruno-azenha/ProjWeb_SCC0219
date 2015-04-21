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

	$("#login").submit(function(event){
		var email = $("#email");
		var pass = $("#password");
		if (!validaEmail(email)) {
			
			event.preventDefault();
		}
		else
			localStorage.setItem("email",email.val());
			localStorage.setItem("password",pass.val());


		
	});		
})
