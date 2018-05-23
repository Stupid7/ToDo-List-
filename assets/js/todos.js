var his;
//for line through and fade color
$("ul").first().on("click","li",function(){
	$(this).toggleClass("strike");
});

// for deleting todos(lis) on click
$("ul").first().on("click","span", function (event) {
	$(this).parent().fadeOut(324, function () {
		var audio =new Audio('assets/recycle.wav');
		audio.play();
		his = $(this).remove().text();

		//adding deleted todo to history
		$("ul").last().append("<li>"+his.replace(/<i class='far fa-trash-alt'><i>/g,'')+"<hr></li>");
		$(this).remove();

	});
	event.stopPropagation();
});
//taking new todo list form user input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newItem = $(this).val();
		$(this).val("");
		$("ul").first().append("<li><span><i class='far fa-trash-alt'></i></span> "+newItem+"<hr></li>");
	}
})


//history button for deleted ToDOs
$("#button").on("click",function(){
	$("#history").slideToggle();
});
// $("#button").on("mouseleave",function(){
// 	$("#history").slideUp();
// });

$("ul").last().css("background","#acb6e5");
// input button
$("#check").click(function(){
	$("input[type='text'").fadeToggle();
});