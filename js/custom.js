/*================================
 *Author:RSACreative
 *Template:Fundomy
 *Version:1.0
 *================================
 */
(function($) {

	"use strict";

	/*===============Main Menu===============*/
	$(document).on("click", ".navbar-toggle", function() {
		$(".navbar-collapse-wrp").slideToggle();
		return false;
	});
	/*===============End===============*/

	/*===============SubMenu===============*/
	$(document).on("click", ".submenu", function() {
		$(".abs-menu").slideUp();
		if ($(this).find(".abs-menu").is(":hidden")) {
			$(this).find(".abs-menu").slideDown("slow");
		}
		return true;
	});
	/*===============End===============*/

	/*===============our trusted supporting partners on home page===============*/
	var owlOP = $('#our-partners');
	owlOP.owlCarousel({
		loop : true,
		autoplay : true,
		margin : 0,
		nav : false,
		responsiveClass : true,
		responsive : {
			0 : {
				items : 1
			},
			360 : {
				items : 2
			},
			640 : {
				items : 3
			},
			1024 : {
				items : 5,
				dots : false,
			}

		}

	})
	/*===============End===============*/

	var owlRC = $('#recentCause');
	owlRC.owlCarousel({
		loop : true,
		nav : true,
		dots : true,
		margin : 30,
		responsiveClass : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive : {
			0 : {
				items : 1,
				nav : false

			},
			600 : {
				items : 2,
				nav : false

			},
			992 : {
				items : 3,
				nav : true

			}
		}
	})

	var owlRC = $('#latsetblog');
	owlRC.owlCarousel({
		loop : true,
		nav : true,
		dots : true,
		margin : 30,
		responsiveClass : true,
		navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive : {
			0 : {
				items : 1,
				nav : false

			},
			600 : {
				items : 2,
				nav : false

			},
			992 : {
				items : 3,
				nav : true

			}
		}
	})

	var owldemo5 = $('#owlslientSay');
	owldemo5.owlCarousel({
		loop : true,
		autoplay : true,
		margin : 0,
		nav : false,
		responsiveClass : true,
		responsive : {
			0 : {
				items : 1
			}

		}
	})

	/*===============index hero banner slider===============*/
	var owlHS = $('#heroslider');
	owlHS.owlCarousel({
		loop : true,
		autoplay : true,
		margin : 0,
		nav : false,
		responsiveClass : true,
		responsive : {
			0 : {
				items : 1
			}

		}
	})

	// add animate.css class(es) to the elements to be animated
	function setAnimation(_elem, _InOut) {
		// Store all animationend event name in a string.
		// cf animate.css documentation
		var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		_elem.each(function() {
			var $elem = $(this);
			var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

			$elem.addClass($animationType).one(animationEndEvent, function() {
				$elem.removeClass($animationType);
				// remove animate.css Class at the end of the animations
			});
		});
	}

	// Fired before current slide change
	owlHS.on('change.owl.carousel', function(event) {
		var $currentItem = $('.owl-item', owlHS).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-out]");
		setAnimation($elemsToanim, 'out');
	});

	// Fired after current slide has been changed
	owlHS.on('changed.owl.carousel', function(event) {

		var $currentItem = $('.owl-item', owlHS).eq(event.item.index);
		var $elemsToanim = $currentItem.find("[data-animation-in]");
		setAnimation($elemsToanim, 'in');
	})
	/*===============End===============*/

	/*===============Updated Gallery on home page===============*/
	var checkWidth = $(document).width();
	if (checkWidth <= 1024) {
		var owlUG = $('#updated-gallery');
		owlUG.owlCarousel({
			loop : true,
			autoplay : true,
			margin : 0,
			nav : false,
			responsiveClass : true,
			responsive : {
				0 : {
					items : 1
				},
				360 : {
					items : 2
				},
				768 : {
					items : 3,
					dots : true
				}

			}

		})
	} else {
		$('.updated-gallery').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
	}
	/*===============End===============*/

	/*===============Custome Select drop down===============*/
	$(".custom-select").each(function() {
		$(this).wrap("<div class='select-wrapper'></div>");
		$(this).after("<div class='holder'></div>");
	});
	$(".custom-select").on("change", function() {
		var selectedOption = $(this).find(":selected").text();
		$(this).next(".holder").text(selectedOption);
	}).trigger('change');
	/*===============End===============*/

	/*===============Donation Popup price tabs===============*/
	$(document).on("click", ".price-tags", function() {
		$(".price-tags").removeClass('active')
		$(this).addClass('active');
		return false;
	});
	/*===============End===============*/

	/*===============owl carousel gallery-4-cols/gallery-2-cols===============*/
	var owlGC = $('#gallery-carousel');
	owlGC.owlCarousel({
		margin : 0,
		nav : true,
		dots : false,
		navText : ["<i class='fa fa-chevron-circle-left'></i>", "<i class='fa fa-chevron-circle-right'></i>"],
		responsiveClass : true,
		responsive : {
			0 : {
				items : 1
			}
		}

	})
	/*===============End===============*/

	/*===============Prices LineProgressbar===============*/
	$.fn.LineProgressbar = function(options) {

		var options = $.extend({
			percentage : null,
			ShowProgressCount : false,
			duration : 1000,
			// Styling Options
			fillBackgroundColor : '#ff8f07',
			backgroundColor : '#cccccc',
			radius : '0px',
			height : '6px',
			//width: '100%'
		}, options);

		return this.each(function(index, el) {
			// Markup
			$(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
			// console.log($(el).attr('data-vale'));
			var progressFill = $(el).find('.proggress');
			var progressBar = $(el).find('.progressbar');

			progressFill.css({
				backgroundColor : options.fillBackgroundColor,
				height : options.height,
				borderRadius : options.radius
			});
			progressBar.css({
				width : options.width,
				backgroundColor : options.backgroundColor,
				borderRadius : options.radius
			});

			// Progressing
			progressFill.animate({
				width : $(el).attr('data-vale') + "%" //   options.percentage + "%"
			}, {
				step : function(x) {
					if (options.ShowProgressCount) {
						$(el).find(".percentCount").text(Math.round(x) + "%");
					}
				},
				duration : options.duration
			});

		});
	}
	var wow = new WOW({
		boxClass : 'wow', // animated element css class (default is wow)
		animateClass : 'animated', // animation css class (default is animated)
		offset : 0, // distance to the element when triggering the animation (default is 0)
		mobile : true, // trigger animations on mobile devices (default is true)
		live : true, // act on asynchronously loaded content (default is true)
		callback : function(box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated

			$('.animated .progress_barvalue').LineProgressbar({
				//percentage:70,
				//radius: '3px',
				//height: '20px',
				//fillBackgroundColor: '#E0C341'
			});

		},
		scrollContainer : null, // optional scroll container selector, otherwise use window,
		resetAnimation : true,     // reset animation on end (default is true)
	});
	wow.init();

	/*===============End===============*/

	/*Secrch box*/
	$(document).on("click", ".search_submit", function() {
		$(".search_input").toggleClass('active');
	});
	/*end*/

	/*Progressbar*/
	$('.progress-bar > span').each(function() {
		var $this = $(this);
		var width = $(this).data('percent');
		$this.css({
			'transition' : 'width 3s'
		});
		setTimeout(function() {
			$this.appear(function() {
				$this.css('width', width + '%');
			});
		}, 500);
	});

	$('[data-width]').each(function() {
		$(this).css('width', $(this).data("width"));
	});

	/*end*/
	

})(jQuery);
