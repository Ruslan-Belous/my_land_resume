$(document).ready(function() {




	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active")
	});

	$("#back-top").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});




	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midClick: true});

	$(".top_name h1").animated("fadeInDown", "fadeOutUp")
	$(".top_name p, .secrion_header").animated("fadeInUp", "fadeOutDown")
	$(".round").animated("fadeInDown", "fadeOutDown")
	$(".animate_left").animated("fadeInLeft", "fadeOutDown")
	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown")
	$(".animate_right").animated("fadeInRight", "fadeOutDown")
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown")
	$(".animate_center").animated("flipInY", "flipOutY")
	$(".right").animated("fadeInRight", "fadeOutDown")
	$(".left").animated("fadeInLeft", "fadeOutDown")
	// $(".mouse-icon").animated("fadeInUp" )


	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();

	});
	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_"+i);
		$(this).find(".port_descr").attr("id", "work_"+i)
	});
	// $("input, select, textarea").jqBootstrapValidation();

$("#loginform").validate({

       rules:{

            name:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },

            email:{
                required: true,
                minlength: 6,
                maxlength: 36,

            },
            message:{
                required: true,
                minlength: 4,
                maxlength: 256,
            },
       },

       messages:{

            name:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Ім'я повинне буде мінімум 4 символа",
                maxlength: "Максимальне число символів - 16",

            },

            email:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Email повиннен буде мінімум 4 символа",
                maxlength: "Максимальне число символів - 36",

            },
            message:{
                required: "Це поле обов'язкове для заповнення",
                minlength: "Повідомлення повинно мати мінімум 4 символа",
                maxlength: "Максимальне число символів - 256",
            },
       }

    });

	$(".top_mnu ul a").mPageScroll2id();
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(200).fadeOut("slow");

	// $(".top_text h1").animated("fadeInDown", "fadeOutUp");
	// $(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 

$(".toggle_mnu").click(function(){
	$(".sandwich").toggleClass("active");
});

$(".top_mnu ul a").click(function(){
	$(".top_name").removeClass("h_opacity")
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_name").removeClass("h_opacity")
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_name").addClass("h_opacity")
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	};



});

