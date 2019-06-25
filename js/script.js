function synopsis(){
	$("#intro .container").velocity("transition.slideLeftIn",{
								stagger: 100,
							 });
}

$(document).ready(function(){
	synopsis();
});