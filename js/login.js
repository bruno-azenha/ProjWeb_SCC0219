$(document).ready(function() {
	
	$("#botaoLogin").click(function(){
		var email = $("#email");
		if (validaEmail(email) == false) {
			alert("O email é inválido.");
		}
		else {
			alert("O email é válido!")
		}
	});		
});
