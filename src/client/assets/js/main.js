
		$(document).ready(function(){
		
			// For floating contact us			
			if($(window).width()>=768){
				$(".floatingContactBox").click(function(){
					$(".floatingContactContent").css('margin-right','0px');
				});
				$(".closeIcon").click(function(){				
					$(".floatingContactContent").css('margin-right','-355px');				
				});
			}
			if($(window).width()<=767){
				$(".floatingContactBox").click(function(){
					$(".floatingContactContent").css('margin-bottom','0px');
				});
				$(".closeIcon").click(function(){				
					$(".floatingContactContent").css('margin-bottom','-510px');				
				});
			}
			
			// For Slider Button control
			$('.left').click(function(){
				$('.carousel').carousel('prev');
			});
			$('.right').click(function(){
				$('.carousel').carousel('next');
			});
			
			$('.mastersliderLeft').click(function(){
				$('.masterCarousel').carousel('prev');
			});
			$('.mastersliderRight').click(function(){
				$('.masterCarousel').carousel('next');
			});
			
			/* Back To Top button
					if ($('#back-to-top').length) {
						var scrollTrigger = 300, // px
							backToTop = function () {
								var scrollTop = $(window).scrollTop();
								if (scrollTop > scrollTrigger) {
									$('#back-to-top').addClass('show');
								} else {
									$('#back-to-top').removeClass('show');
								}
							};
						backToTop();
						$(window).on('scroll', function () {
							backToTop();
						});
						$('#back-to-top').on('click', function (e) {
							e.preventDefault();
							$('html,body').animate({
								scrollTop: 0
							}, 1000);
						});
					}*/
					
					$('.backToTopLink').on('click', function (e) {
						e.preventDefault();
						$('html,body').animate({
							scrollTop: 0
						}, 1000);
					});
					
					
			/* Back To Top button ends*/
			
		});

		$(document).ready(function() {
			$("#contactForm").validate({
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					}
				},
				messages: {
					name: "Please enter name",
					email: "Please enter a valid email address",
					message: {
						required: "Please enter a message"
					}
				}
			});
			$("#floatingContactForm").validate({
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					}
				},
				messages: {
					name: "Please enter name",
					email: "Please enter a valid email address",
					message: {
						required: "Please enter a message"
					}
				}
			});
			
			
		});
	