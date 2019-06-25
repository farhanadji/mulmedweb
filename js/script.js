function animasiIntro() {
	$("#text span").velocity("transition.slideLeftIn", {
		stagger: 100,
		complete: function () {
			animasiBawah();
		}
	});
}

function animasiBawah() {
	$("#textbawah span").velocity("transition.flipXIn", {
		stagger: 300,
		complete: function () {
			animasiBtn();
		}
	});
}

function animasiBtn() {
	$("#start").velocity("transition.bounceUpIn")
		.mouseenter(function () {
			$(this).velocity({ width: 200 })
		})
		.mouseleave(function () {
			$(this).velocity({ width: 150 })
		});
}

function animasiIntroOut() {
	$("#start").velocity("transition.whirlOut", {
		stagger: 200,
		complete: function () {
			$("#text span").velocity("transition.flipYOut"),
				$("#textbawah span").velocity("transition.flipYOut")
			$("#namahead span").velocity("transition.slideUpBigIn")
			$("#bawahhead span").velocity("transition.slideUpBigIn")
			callMenu();
			$("#menu ul li a[href='profile']").trigger("click");
		}
	});
}

function callMenu() {
	$("#menu ul li").velocity("transition.slideLeftIn", {
		stagger: 100
	});
	$("#menu ul li a").off().click(function (event) {
		event.preventDefault();

		$(this).parent("li").addClass("active").siblings().removeClass("active");

		var hrefString = $(this).attr("href");
		if (hrefString == "intro") {
			backIntro();
		} else {
			if (!$("#" + hrefString).is(":visible")) {
				$(".container-content").fadeOut(1000);
				setTimeout(function () {
					$("#" + hrefString).show();
					window[hrefString]();
				}, 1000);
			}
		}
	});
}

function profile() {
	$("#profile img").velocity("transition.slideUpIn", { duration: 1500 });
	$("#profile .title").velocity("transition.flipYIn", { duration: 1500 });
	$("#profile #textprofile").velocity("transition.flipYIn", { duration: 1500 });
}

function skills() {
	$("#skills .title-skill").velocity("transition.flipYIn", { duration: 1500 });
	$("#skills span").velocity("transition.slideUpIn", { duration: 1500 });

}

function backIntro() {
	$("#menu ul li").hide();
	$(".container-content").hide();
	$("#bawahhead").hide();
	$("#namahead").hide();
}

$(document).ready(function () {
	animasiIntro();
});