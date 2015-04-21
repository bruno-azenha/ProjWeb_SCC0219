window.onload = function(){
 
 var d = new Date();
 var maxDate;
 
 if(d.getMonth()<10){
 	maxDate = d.getFullYear()+"-0"+(d.getMonth()+1)+"-"+(d.getDate());	
 }
 else
 	maxDate = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate());
 

$("#datanasc").attr("max",maxDate);



};

$(document).ready(function(){
	
	$("#cpf").focusout(function(event){
		var cpf = $("#cpf");
		
		if(validateCPF(cpf.val()))
			removeError(cpf);
		else
			displayError(cpf,"invalid CPF");
	})

	$("#name").focusout(function(event){
		var name = $("#name");
		if(validateFullName(name.val()))
			removeError(name);
		else
			displayError(name,"name has to be at least 2 words long\n each word with 3 characters or more")
	})

	// Impede o usuário de colar no campo de confirmação de senha
	$("#passConfirmation").bind('paste', function(e) {
        e.preventDefault();
		alert("Você não pode colar nesse campo.");
	})
})
