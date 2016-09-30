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
    if (tempo.getHours() < 12) {
		$("relogio12").hide();
		$("relogio00").show();
	}
}

	

$(document).ready(function (){
	$('#show').hide();
	setInterval(relogio,1000);
	$("#hide").click(function() {
		$(".relogio12").hide();
		$(".relogio00").hide();
		$(".sombra").hide();
		$("#minuto").hide();
		$("#hora").hide();
		$("#segundo").hide();
		$("#centro").hide();
		$('#show').show();
		$('#hide').hide();
	});
	$("#show").click(function() {
		$(".sombra").show();
		$("#minuto").show();
		$("#hora").show();
		$("#segundo").show();
		$("#centro").show
		$('#show').hide();
		$('#hide').show();
		$(".relogio00").show();
	});
})
