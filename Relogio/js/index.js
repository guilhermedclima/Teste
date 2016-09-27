function relogio() {
    var tempo = new Date();
    var s = tempo.getSeconds() *6;
    var m = tempo.getMinutes()*6 +s/60;
    var h = tempo.getHours()* 30 +m/12;
    var rots = "rotate("+ s +"deg)";
    var rotm = "rotate("+ m +"deg)";
    var roth = "rotate("+ h +"deg)";
    $("#segundo").css({"transform": rots});
    $("#minuto").css({"transform": rotm});
    $("#hora").css({"transform": roth});
}

$(document).ready(function (){
	$('#show').hide();
	setInterval(relogio,1000);
	$("#hide").click(function() {
		$(".relogio").hide();
		$('#show').show();
		$('#hide').hide();
	});
	$("#show").click(function() {
		$(".relogio").show();
		$('#show').hide();
		$('#hide').show();
	});
})
