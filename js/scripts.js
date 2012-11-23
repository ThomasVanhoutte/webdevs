$(document).ready(function() {		
	// width/height highlgihted afbeeldingen juist zetten
	$("article.highlight-wrap img").each(function() {
		var $this = $(this),
		w = $this.width(),
		h = $this.height();
		if (w > h) {
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
		
		$this.animate({"top": -h}, "slow")
	});
	
	// secondary laten invliegen
	$("aside#secondary").animate({
		opacity: 1,
		right: 0}, 800, function() {
			$("aside#social-media-wrap").animate({
				marginLeft: 500,
				opacity:1}, 850)
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
	
	$("aside#secondary").css("marginTop", function() {
		var h = $("section#main p#bread-crumbs").height();
		return h;
	});
});