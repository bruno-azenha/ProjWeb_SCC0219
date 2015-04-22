// Verifica se um email é válido de acordo
// com as especificações do trabalho.
function validaEmail(email){ 
	var pattern = new RegExp("^[a-z]([a-z0-9\-\_]*\.?[a-z0-9\-\_]+)*\@[a-z0-9\-\_]+\.[a-z\-\_\.]*[a-z0-9\-\_]+$");
	if (pattern.test(email.val()) == false) {
		return false;
	}
	else 
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
	

}
//applies the accept class of css.error
function accept(id){
	id.addClass("accept");

}

//verify if the inout password are equal.
function validatePass(pass1,pass2){
	return (pass1===pass2);

}

// Função que verifica se um telefone é válido de 
// acordo com as especificações do trabalho.
function validatePhone(phone){ 
	var pattern = new RegExp("^([(][0-9]{2}[)][0-9]{5}[-][0-9]{2}[-][0-9]{2})$");
	
	if (pattern.test(phone) == false) {
		return false;
	}
	else 
		return true;
}

//reference http://www.devmedia.com.br/dicas-validando-cep/833
function validateCEP(cep){
	var zip = cep.charAt(0)+cep.charAt(1)+cep.charAt(2);

	if(zip<10){
			
		return false;

	}
	
	if( (zip >=10) && (zip <=199)) {
		$("#estado").val("SP");
		return true;
	}
	
	if( (zip >=200) && (zip <=289)) {
		$("#estado").val("RJ");
		return true;
	}

	if( (zip >=790) && (zip <=799)) {
		$("#estado").val("MS");
		return true;
	}

	if( (zip >=300) && (zip <=399)) {
		$("#estado").val("MG");
		return true;
	}

	if( (zip >=780) && (zip <=788)) {
		$("#estado").val("MT");
		return true;
	}

	if( (zip >=699) && (zip <=699)) {
		$("#estado").val("AC");
		return true;
	}

	if( (zip >=570) && (zip <=579)) {
		$("#estado").val("AL");
		return true;
	}

	if( (zip >=690) && (zip <=698)) {
		$("#estado").val("AM");
		return true;
	}

	if( (zip >=689) && (zip <=689)) {
		$("#estado").val("AP");
		return true;
	}

	if( (zip >=400) && (zip <=489)) {
		$("#estado").val("BA");
		return true;
	}

	if( (zip >=600) && (zip <=639)) {
		$("#estado").val("CE");
		return true;
	}

	if( (zip >=700) && (zip <=736)) {
		$("#estado").val("DF");
		return true;
	}

	if( (zip >=290) && (zip <=299)) {
		$("#estado").val("ES");
		return true;
	}

	if( (zip >=737) && (zip <=769)) {
		$("#estado").val("GO");
		return true;
	}

	if( (zip >=650) && (zip <=659)) {
		$("#estado").val("MA");
		return true;
	}

	if( (zip >=660) && (zip <=688)) {
		$("#estado").val("PA");
		return true;
	}

	if( (zip >=580) && (zip <=589)) {
		$("#estado").val("PB");
		return true;
	}

	if( (zip >=500) && (zip <=569)) {
		$("#estado").val("PE");
		return true;
	}

	if( (zip >=640) && (zip <=649)) {
		$("#estado").val("PI");
		return true;
	}

	if( (zip >=800) && (zip <=879)) {
		$("#estado").val("PR");
		return true;
	}

	if( (zip >=590) && (zip <=599)) {
		$("#estado").val("RN");
		return true;
	}

	if( (zip >=789) && (zip <=789)) {
		$("#estado").val("RO");
		return true;
	}

	if( (zip >=693) && (zip <=693)) {
		$("#estado").val("RR");
		return true;
	}

	if( (zip >=900) && (zip <=999)) {
		$("#estado").val("RS");
		return true;
	}

	if( (zip >=880) && (zip <=899)) {
		$("#estado").val("SC");
		return true;
	}

	if( (zip >=490) && (zip <=499)) {
		$("#estado").val("SE");
		return true;
	}

	if( (zip >=770) && (zip <=779)) {
		$("#estado").val("TO");
		return true;
	}

}

