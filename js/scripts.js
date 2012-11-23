$(document).ready(function() {		
	// width/height highlgihted afbeeldingen juist zetten
	$("article.highlight-wrap img").each(function() {
		var $this = $(this),
		w = $this.width(),
		h = $this.height();
		if (w > h){
			$this.height("100%");
		}
		else {
			$this.width("100%");
		}
	});
	
	// top laten invliegen
	$("div#top-wrap").animate({top:0}, "slow");
	
	// highlighted captions laten invliegen 
	$(".highlight-wrap figcaption").each(function(){
		var $this = $(this),
		h = $this.outerHeight();
		
		$this.animate({"top": -h}, "slow");
	});
	
	// secondary laten invliegen
	$("aside#secondary").animate({
		opacity: 1,
		right: 0}, 800, function() {
			$("aside#social-media-wrap").animate({
				marginLeft: 500,
				opacity:1}, 850);
		});
	
	// sub-nav infaden
	$("nav#sub-nav").fadeIn(1500);
	
	// Vergroot (breedte) elke search bij focus
	$("input#search").focus(function() {
		$(this).animate({
			width: "120px"
		}, 400);
	});
	$("input#search").blur(function() {
		$(this).animate({
			width: "80px"
		}, 400);
	});
	
	// Maak input|text van  search mooier
	$("input#search").focus(function() {
		$(this).css({
			"color" : "#666",
			"fontStyle" : "normal"
		});
	});
	$("input#search").blur(function() {
		$(this).css({
			"color" : "#aaa",
			"fontStyle" : "italic"
		});
	});
	
	// Top marge van secondary 
	$("aside#secondary").css("marginTop", function() {
		var h = $("section#main p#bread-crumbs").height();
		return h;
	});
	
	// Toon footer items
	$("div#page-footer-content article h2").click(function() {
		var $this = $(this),
		next = $this.next("ul");
		
		next.slideToggle("slow");
		$this.toggleClass("clickedH2");
		
		var scrollBottom = $(window).scrollTop() + $(window).height();
		$("body,html").animate({
            scrollTop: scrollBottom
        }, 800);
	});
	
	// To top
	$("li#to-top a").click(function(e) {
		$("body,html").animate({
				scrollTop: 0
			}, 800);
		e.preventDefault();
	});
	
	// fade opacity social media
	$("aside#social-media-wrap li").hover(
		function() {
		$(this).find("img").fadeTo("slow", 1);
	}, function() {
		$(this).find("img").fadeTo("fast", 0.3);
	});		
	
	// Scrollfuncties!
	$(window).scroll(function(){
		// fixed secondary menu
		var supra = $("div#supra-top-wrap"),
			topWrap = supra.children("div#top-wrap"),
			subNav = supra.children("nav#sub-nav"),
			navigatie = supra.children("aside");
			
		if ($(window).scrollTop() > 0){
			// verberg navs
			supra.stop(true).animate({
				"top":"-38px",
				"height":"55px"
			}, 500);
			subNav.stop(true).animate({"top":"-32px"}, 500);
			navigatie.slideDown("slow");
			
			// FUNCTIES toon navs bij hover
			function menuShow() {
				$(this).stop(true).animate({"top":"0"}, 500, function() {
						subNav.css("opacity",1).animate({"top":"0"}, 400);
					}).css("height", "auto");
			}
			function menuHide() {
				$(this).stop(true).animate({
						"top":"-38px",
						"height":"55px"
				}, 500);
				subNav.stop(true).animate({"top":"-32px"}, 500);
			}
			
			// HoverIntent met functies
			supra.hoverIntent({
				over: menuShow, 
				timeout: 1000, 
				out: menuHide
			});
		}
		
		else {
			supra.stop(true).animate({"top":"0"}, 500, function() {
				subNav.animate({"top":"0"}, 400);
			}).css("height", "auto");
			navigatie.stop(true).slideUp("slow");
		}
		
		// Voeg back-to-top toe		
		var toTop = $("li#to-top");
		if ($(window).scrollTop() > 100){
				toTop.fadeIn(1200);
		}
		else {
			toTop.fadeOut(800);
		}
	});	
});