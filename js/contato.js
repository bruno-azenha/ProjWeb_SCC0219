$(document).ready(function(){
	$("#name").focusout(function(event){
		var n = $("#name");
		var name = n.val();
		
		if(validateName(name)){
			removeError(n);
		}
		else
			displayError(n,"name has to start with a letter\n and has to contain 3 letters or more");
			

	})

	$("#submit").click(function(event){
		c= $("#conheceu");
		var checked = $('input[type="checkbox"]').is(":checked");
		
    if (!checked){
        displayError(c,"Please check at least one checkbox");
        return false;
    }
    else 
    	removeError(c);



	})


	


	
})