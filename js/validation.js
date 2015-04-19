function validateDate(date1,date2){
		

	if (date1 > date2){
		return true;
	}
	
	else return false;
}

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




function displayError(id,msg){
	$("p").remove(".errorMsg");
	id.removeClass("accept");

	id.parent().append("<p class = errorMsg>"+msg+"</p>");
	id.addClass("error");
}

function removeError(id){
	id.removeClass("error");
	id.addClass("accept");
	$("p").remove(".errorMsg");


}
