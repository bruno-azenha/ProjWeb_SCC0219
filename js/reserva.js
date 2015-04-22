$(document).ready(function() {
	
	$("#iDate").change(function() {
		var date = new Date($(this).val());
		var minOutDate;
		// alert (date);
		if(date.getMonth()<10){
 		minOutDate = date.getFullYear()+"-0"+(date.getMonth()+1)+"-"+(date.getDate()+3);	
 	}
 		else
 		minOutDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDate()+3);

		$("#oDate").attr("min", minOutDate);
		$("#oDate").removeAttr("disabled");

		$("#reservation").submit(function (){

			localStorage.setItem("iDate",$("#iDate").val());
			localStorage.setItem("oDate",$("#oDate").val());
			localStorage.setItem("adults",$("#adult").val());
			localStorage.setItem("baby",$("#baby").val());
			localStorage.setItem("child",$("#child").val());
		})
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
