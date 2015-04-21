// Função que verifica se um email é válido de 
// acordo com as especificações do trabalho.
function validaEmail(email){ 
	var pattern = new RegExp("^[a-z]([a-z0-9\-\_]*.?[a-z0-9\-\_]+)*\@[a-z0-9\-\_]+\.[a-z\-\_.]*[a-z0-9\-\_]+$");
	if (pattern.test(email.val()) == false) {
		return false;
	}
	else 
		return true;
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
//applies the error class into the given id
function displayError(id,msg){
	$("p").remove(".errorMsg");
	id.removeClass("accept");
	id.addClass("error");
	id.parent().append("<p class = errorMsg>"+msg+"</p>");
	
}

//remove the error class above
function removeError(id){
	id.removeClass("error");
	$("p").remove(".errorMsg");
	id.addClass("accept");

}

// Função que verifica se um telefone é válido de 
// acordo com as especificações do trabalho.
function validatePhone(phone){ 
	var pattern = new RegExp("^([(][0-9]{2}[)][0-9]{5}[-][0-9]{2}[-][0-9]{2})$");
	alert(phone);
	if (pattern.test(phone) == false) {
		return false;
	}
	else 
		return true;
}