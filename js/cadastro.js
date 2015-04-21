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

	$("#email").focusout(function(event){
		var email = $("#email");
		if (validaEmail(email) == false) {
			displayError(email,"invalid e-mail");
		}
		else {
			removeError(email);
		}
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
	$("#passConfirmation").focusout(function(event){
		var pass = $("#senha");
		var conf = $("#passConfirmation");
		if( validatePass(pass.val(),conf.val())){
			removeError(conf);
		}
		else
			displayError(conf,"passwords did not match");


	})


	$("#register").submit(function(event){

		var name = $("#name");
		var cpf = $("#cpf");
		var data = $("#datanasc");
		var email = $("#email");
		// var sexo = $("#sexo");
		// var eCivil = $("#estadoCivil");
		var cidade = $("#cidade");
		var estado = $("#estado");
		var cep = $("#cep");
		var senha = $("#senha");
		var senhaC = $("#passConfirmation");
		console.log(validateFullName(name.val()));
		console.log(validateCPF(cpf.val()));
		console.log(validateCEP(cep.val()));
		console.log(validaEmail(email));
		console.log(senha.val());
		console.log(senhaC.val());
		console.log(validatePass(senha.val(),senhaC.val()));
		

		if ((!validateFullName(name.val())) || (!validateCPF(cpf.val())) || (!validateCEP(cep.val()))
		 	|| (!validaEmail(email)) ||(!validatePass(senha.val(),senhaC.val()))) {
			event.preventDefault();
		}
		else {

			localStorage.setItem("name",name.val());
			localStorage.setItem("cpf",cpf.val());
			localStorage.setItem("data",data.val());
			// localStorage.setItem("sexo",sexo.val());
			// localStorage.setItem("eCivil",eCivil.val());
			localStorage.setItem("cidade",cidade.val());
			localStorage.setItem("estado",estado.val());
			localStorage.setItem("cep",cep.val());
			localStorage.setItem("email",email.val());
			localStorage.setItem("senha",senha.val());

		
		}
		
	});		



	
})



