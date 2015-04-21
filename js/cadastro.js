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

	$("#cep").focusout(function(event){
		var cep = $("#cep");
		var mask = new RegExp("^[0-9]{8}$");
		if(mask.test(cep.val())){
			
			if(validateCEP(cep.val()))
				removeError(cep);
			else
				displayError(cep,"invalid CEP");

		}

		else
			displayError(cep,"invalid CEP");
	})


	$("#name").focusout(function(event){
		var name = $("#name");
		if(validateFullName(name.val()))
			removeError(name);
		else
			displayError(name,"name has to be at least 2 words long\n each word with 3 characters or more")
	})

	
	
	$("#senha").change(function(event){
		var senha = $("#senha").val();
		var forca = verificaSenha(senha)
		alert (forca);
	})

	// Impede o usuário de colar no campo de confirmação de senha
	$("#passConfirmation").bind('paste', function(e) {
        e.preventDefault();
		alert("Você não pode colar nesse campo.");
	})
})



