// Empty JS for your own code to be here

var a = document.body;

$(function sEXP(){
    document.getElementById("#education").hide();
  $("#experience").show();
});

$(function sEDU(){
  $("#education").show();
  $("#experience").hide();
});

$('.toggle').click(function (event) {
	event.preventDefault();
	var target = $(this).attr('href');
	$(target).toggleClass('hidden show');
});