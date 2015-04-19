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
