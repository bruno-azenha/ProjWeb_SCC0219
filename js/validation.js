// Verifica se um email é válido de acordo
// com as especificações do trabalho.
function validaEmail(email){ 
	var pattern = new RegExp("^[a-z]([a-z0-9\-\_]*\.?[a-z0-9\-\_]+)*\@[a-z0-9\-\_]+\.[a-z\-\_\.]*[a-z0-9\-\_]+$");
	if (pattern.test(email.val()) == false) {
		return false;
	}
	return true;
}

// Verifica a qualidade da senha
// Retorna uma string, podendo ser
// 'pequena', 'fraca', 'media' ou 'forte'
function verificaSenha(senha){
	
	var tipoSenha;
	
	// Verifica se eh pequena
	var smallPattern = new RegExp("^.{0,5}$");
	if (smallPattern.test(senha)){
		return ("pequena");
	}
	
	// Verifica se a senha eh fraca
	var weakPattern = new RegExp("^(.{6}|[\w]+)$");
	if (weakPattern.test(senha)){
		return ("fraca");
	}
	
	// Para verificar se eh media, precisa checar 
	// se possui char especiais, letras e numeros
	var temLetrasPattern = new RegExp("[a-zA-z]");
	var temNumerosPattern = new RegExp("[0-9]");
	var temSpecialPattern = new RegExp("[^a-zA-Z0-9]");
	
	if (temLetrasPattern.test(senha)){
		if (temNumerosPattern.test(senha)){
			if (temSpecialPattern.test(senha)){
				tipoSenha = "media";
			}
		}
	}
	
	// Para verificar se eh forte, precisa checar
	// se possui letras maiusculas, minusculas eh
	// pelo menos 2 special char diferentes.
	var temMinusculasPattern = new RegExp("[a-z]");
	var temMaiusculasPattern = new RegExp("[A-Z]");
	var temDoisSpecialPattern = new RegExp("");
	
	if (tipoSenha == "media"){
		var specChar = temSpecialPattern.exec(senha);
		var temOutroSpecCharacterpattern = new RegExp("[^a-zA-Z0-9" + specChar + "]");
		if (temOutroSpecCharacterpattern.test(senha)){
			return "forte";
		}
	} 
	return "media"
}

//simple method to check if date1 is greater than date2
// uses two Date objects to do the comparison
function validateDate(date1,date2){

	if (date1 > date2){
		return true;
	}
	else return false;
}

//validate name as the specified rules
function validateName(name){
	var count = 0;
	count = name.length;
	var reName = new RegExp("^[a-z]|[A-Z]");
	
  if (reName.test(name.charAt(0)) && (count>2)){
  	return true;
  }
  	
  else
  	return false;
}

//validate full name as the specified rules
function validateFullName(fName){

	var name= fName.split(" ");
	if (name.length<2)
		return false;
	for(i=0;i<name.length;i++){
		if(!validateName(name[i]))
			return false;
	}
	return true;
}

//validate CPF as seen in the reference below
//reference: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js

function validateCPF(cpf) { 

	var soma =0; 
	var resto; 
	
	if (cpf == "00000000000") return false;
	 for (i=1; i<=9; i++){
	 	soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
	 }
	resto = (soma * 10) % 11;

	if (resto == 10)
	 resto = 0; 
	
	if (resto != parseInt(cpf.substring(9, 10)) ) 
	 	return false; 
	 
	 soma = 0; 
	 for (i = 1; i <= 10; i++) 
	 	soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i); 
	 
	 resto = (soma * 10) % 11; 
	 if (resto == 10) 
	 	resto = 0; 
	 
	 if (resto != parseInt(cpf.substring(10, 11) ) ) 
	 	return false; 
	 
	 return true; 
}

//display error receives a reference and a string message
//aplies the error class into the given id
function displayError(id,msg){
	$("p").remove(".errorMsg");
	id.removeClass("accept");

	id.parent().append("<p class = errorMsg>"+msg+"</p>");
	id.addClass("error");
}

//remove the error class above
function removeError(id){
	id.removeClass("error");
	id.addClass("accept");
	$("p").remove(".errorMsg");

}
