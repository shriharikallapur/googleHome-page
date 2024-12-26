$(document).on("click", ".searchBar-inner-2", function() {
	$(".searchBar-inner-container").css({
		"height": "400px",
		"position": "absolute",
		"background-color": "rgb(255, 255, 255)",
		"border-radius": "20px",
		"top": "18rem"
	})
	$(".searcher-btn").css({"padding-top": "64px"})
})

function hiding() {
	$(".searchBar-inner-container").css({"height": "44px", "border-radius": "50px"})
	$(".searcher-btn").css({"padding-top": "64px"})
}
