$(document).ready(function(){
	$("#name").focusout(function(event){
		var n = $("#name");
		var name = n.val();
		
		if(validateName(name)){
			removeError(n);
		}
		else
			displayError(n,"name has to start with a letter and has to contain 3 letters or more");
			

	})
	$("#email").focusout(function(event){
		var e = $("#email");
		var email = e.val();
		
		if(validaEmail(e)){
			removeError(e);
		}
		else
			displayError(e,"invalid e-mail");
			

	})

	$("#contato").submit(function(event){
		c = $("#conheceu");
		n = $("#name");
		e = $("#email");
	
	var checked = $('input[type="checkbox"]').is(":checked");
		
    if (!checked){
        event.preventDefault();
        displayError(c,"Please check at least one checkbox");
        
    }
    else {
    	removeError(c);
    	

		}
	if(!validateName(n.val()) || !validaEmail(e.val()))
			event.preventDefault();
	}
	)
})