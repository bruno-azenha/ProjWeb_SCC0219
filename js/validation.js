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

function validateDate(date1,date2){

	if (date1 > date2){
		return true;
	}
	
	else return false;
}

function displayError(id,msg){
	$("p").remove(".errorMsg");
	id.parent().append("<p class = errorMsg>"+msg+"</p>");
	id.addClass("error");
	 // ({
  //         "background-image" : "url(imgs/nok.png)",
  //         "background-repeat" : "no-repeat",
  //         "background-position": "top right",
  //         "background-size" : "contain"

  //       });
	
	}

function removeError(id){
	id.removeClass("error");
	id.addClass("accept");
	$("p").remove(".errorMsg");

}