$(document).ready(function() {
	
	$("#iDate").change(function() {
		var date = new Date($(this).val());
		date.setDate( date.getDate() + 3);
		alert (date);
		$("#oDate").attr("min", $(this).val());
		$("#oDate").removeAttr("disabled");
	});
	
	$("#botaoReserva").click(function(){
		var email = $("#email");
		if (validaEmail(email) == false) {
			alert("O email é inválido.");
		}
		else {
			alert("O email é válido!")
		}
	});		
});

window.onload = function(){
 
 var d = new Date();
 var minInDate;
 
 if(d.getMonth()<10){
 	minInDate = d.getFullYear()+"-0"+(d.getMonth()+1)+"-"+(d.getDate()+2);	
 }
 else
 	minInDate = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()+2);
 

$("#iDate").attr("min",minInDate);
$("#oDate").attr("disabled", "disabled");


};
