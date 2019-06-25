	function synopsis(){
		$("#synopsis").show();
		$("#intro .container").velocity("transition.slideUpIn",{
									stagger: 300,
								 });
	}

	function intro(){
		$("#menu ul li").hide();
		$("#intro-logo").show();
		$("#logo-film-intro img").velocity("transition.expandIn",{
			stagger: 300,
			duration: 5000,
			complete: function(){
				animasiBtn();
			}
		});
	}
 
	function animasiBtn(){
		$("#start").velocity("transition.bounceUpIn",{
			width:250,
		})
				   .mouseenter(function(){
						   $(this).velocity({width:250})
				   })
				   .mouseleave(function(){
						   $(this).velocity({width:200})
				   });
	} 
function cycleBackgrounds() {
    var index = 0;
 
    $imageEls = $('.bg-container .slide-bg');
 
    setInterval(function () {
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        $imageEls.eq(index).addClass('show');
        $imageEls.eq(index - 1).removeClass('show');
    }, 7000);
};

function callMenu(){
	$("#menu ul li").velocity("transition.slideLeftIn",{
								stagger: 100
							 });
	$("#menu ul li a").off().click(function(event){
		event.preventDefault();

		$(this).parent("li").addClass("active").siblings().removeClass("active");
	
		var hrefString = $(this).attr("href");
		if(hrefString == "synopsis"){
			synopsis();
			}else{
				if(!$("#" + hrefString).is(":visible")){
					$(".container-content").fadeOut(1000);
					setTimeout(function(){
					$("#" + hrefString).show();
					window[hrefString]();
				},1000);
			}
		}
	});
}

	$(document).ready(function(){
		intro();
		cycleBackgrounds();
	});