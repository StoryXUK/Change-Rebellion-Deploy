(function () {
			var body = document.body;
			var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

			if (!body || !body.classList.contains("rgg-page")) {
				return;
			}

			if (reduceMotion) {
				body.classList.remove("black-mode", "transitioning");
				body.classList.add("green-mode");
				return;
			}

			window.setTimeout(function () {
				body.classList.remove("black-mode");
				body.classList.add("transitioning", "green-mode");
			}, 3500);

			window.setTimeout(function () {
				body.classList.remove("transitioning");
			}, 4380);
		}());