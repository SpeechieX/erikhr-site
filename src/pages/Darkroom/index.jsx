import React, { useState, useEffect } from "react";

const darkroomDetails =
	"The Darkroom is a place for photographic exploration.  A place where I won't post just photographs, but the process and the stories behind them. I'm a bit exhausted from the typical format, so this will be a place to exercise something new.";

const darkroomImage = "https://i.imgur.com/HieZtQW.jpg";

function Darkroom() {
	const [timerDate, setTimerDate] = useState(new Date());
	function updateTimer() {
		let future = Date.parse("feb 20, 2023 12:30:00");
		let now = new Date();
		let diff = future - now;

		let days = Math.floor(diff / (1000 * 60 * 60 * 24));
		let hours = Math.floor(diff / (1000 * 60 * 60));
		let mins = Math.floor(diff / (1000 * 60));
		let secs = Math.floor(diff / 1000);

		let d = days;
		let h = hours - days * 24;
		let m = mins - hours * 60;
		let s = secs - mins * 60;

		document.getElementById("timer").innerHTML =
			"<div>" +
			d +
			"<span>days</span></div>" +
			"<div>" +
			h +
			"<span>hours</span></div>" +
			"<div>" +
			m +
			"<span>minutes</span></div>" +
			"<div>" +
			s +
			"<span>seconds</span></div>";
	}
	useEffect(() => {
		var timerId = setInterval(() => updateTimer(), 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);
	return (
		<div className="container flex flex-col mx-auto">
			<div className="coming-soon-image mx-auto ">
				<h1 className="in-process mt-10 mb-2 text-slate-800 prose prose-2xl">
					In Process...
				</h1>
				<div className="timer-container mt-1">
					<div id="timer"></div>
				</div>
				<div className="darkroom-image-container">
					<img
						src={darkroomImage}
						alt="erik hr darkroom debut"
						className="darkroom-image"
					/>
				</div>
				<div className="copy-container prose mx-auto mt-5">
					<article className="article-container max-w-md mx-auto">
						<section className="prose">
							<p className="prose prose-lg text-slate text-sm">
								{darkroomDetails}
							</p>
						</section>
					</article>
				</div>
			</div>
		</div>
	);
}

export default Darkroom;
