import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import image from "../../assets/luang_prabang.png";
import { skills } from "./copy";

function About() {
	const scrollRef = React.createRef();

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		});
	}, []);
	return (
		<div className="container scroll container-adj" ref={scrollRef}>
			<div className="bio-container">
				<div className="bio-p-one">
					<section data-scroll-section>
						<article>
							<h1
								className="bio-text mb-5 text-black"
								data-scroll
								data-scroll-speed="3"
								data-scroll-position="top"
							>
								My name is <span className=" text-indigo-500">Erik</span>
								<span className=" text-emerald-300"></span>.
							</h1>
						</article>

						<article className="prose prose-xl prose-slate">
							<p className="column-text text-black">
								I'm a developer, photographer, visualist, and tinkerer. A
								product of <span className="text-slate-600">Generation Y</span>,
								I grew up immersed and inspired by the dystopian urban landscape
								of Detroit.
							</p>
						</article>
					</section>
				</div>

				<div className="bio-p-one">
					<section data-scroll-section>
						<article className="prose prose-xl">
							<p className="column-text text-black">
								After moving to Los Angeles in 2016, I began to dig deeper into
								CS, learning code in order to create web apps for my own
								multimedia aspirations. Initially tackling Javascript and Ruby,
								I began venturing into React &amp; React-Native, building full
								stack responsive web and mobile applications.
							</p>
						</article>
					</section>
				</div>
				<div className="bio-p-one">
					<section data-scroll-section>
						<p className="prose prose-xl text-black column-text">
							In 2018, I moved to{" "}
							<span className="text-amber-500">Southeast Asia</span> and began
							to work commercially, while also working hands on in{" "}
							<span className="text-amber-500">Product Management</span>,
							expirmenting with Multi-Platform Applications,{" "}
							<span className=" text-amber-500">
								Contactless Payment Systems (QR),{" "}
							</span>
							App Decoupling,Microservices, Messaging, and more.
						</p>
					</section>
					<section data-scroll-section>
						<div className="my-toolbox mt-32 hide-for-mobile">
							<h1
								className=" text-center text-black"
								data-scroll
								data-scroll-speed="1"
								data-scroll-position="top"
							>
								Here's what's in my toolkit:
							</h1>
							<div className="button-grid hide-for-mobile">
								{skills.map((skill, i) => (
									<button
										key={i}
										className="button-div hover:animate-pulse duration-200"
									>
										{skill}
									</button>
								))}
							</div>
						</div>
					</section>
				</div>
				<div className="cta-container flex justify-center mt-30">
					<section className="cta-section w-5/6 flex justify-center">
						<div className="flex flex-row mx-auto mt-40">
							<div className="ai-cta">
								<a href="/gallery">
									<div className="cta-button mr-5">
										<h4 className="text-black">Explore AI Gallery</h4>
									</div>
								</a>
							</div>
							<div className="darkroom-cta">
								<a href="/darkroom">
									<div className="cta-button">
										<h4 className="text-black">Explore Darkroom</h4>
									</div>
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default About;
