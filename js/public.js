var b = ""
		$('.nav-dropdown li a').mouseenter(function () {
			$(this).css({
				color: "rgb(160, 226, 60)",
			}).mouseleave(function () {
				$(this).css({
					color: b
				})
			})
		})