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
	
	// Função que verifica se um email é válido de 
	// acordo com as especificações do trabalho.
	function validaEmail(email){ 
		var pattern = new RegExp("^[a-z][a-z0-9.\_]+\@[a-z0-9]+\.[a-z]{2,4}$");
		if (pattern.test(email.val()) == false) {
			return false;
		}
		return true;
	}
	
});