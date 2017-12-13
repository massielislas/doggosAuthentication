var myurl= "https://dog.ceo/api/breeds/image/random";

$(document).ready(function() {
	$('img').each(function() {
		$(this).hide();
	})
	$('img').each(
		function() {
			$.ajax({
				url : myurl,
				crossDomain: true,
				dataType : "json",
				context: $(this),
				success : function(parsed_json) {
				  this.attr("src", parsed_json.message);
				}
			})
		})

		$(document).ajaxStop(function() {
			setTimeout(
				function() {
				$('img').each(function() {
					$(this).fadeIn(800);
				})
		}, 2000)
	});
	$('img').click(function() {
		$(this).hide();
		$.ajax({
			url : myurl,
			crossDomain: true,
			dataType : "json",
			context: $(this),
			success : function(parsed_json) {
			  this.attr("src", parsed_json.message);
			}
		})
	})
});

