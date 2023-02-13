import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import image from "../../assets/luang_prabang.png";
import { skills } from "./copy";

const contactWindow =
	"https://us12.list-manage.com/contact-form?u=4c68b3868e9ccb3d5f2d73efc&form_id=852e6db71dd5fb0628fe2389c79ab783";

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
								My name is <span className=" text-red-500">Erik</span>
								<span className=" text-emerald-300"></span>.
							</h1>
						</article>
					</section>
					<section data-scroll-section>
						<article className="prose prose-xl prose-slate">
							<p className="column-text text-black text-md prose">
								I'm a developer, photographer, visualist, and tinkerer. A
								product of the City of Detroit, I started building apps to solve
								real world problems that I saw around me.
							</p>
							<p className="column-text text-black text-md prose">
								Over the past several years, I've been highly motivated to
								create innovative and prestine software solutions. After moving
								to Los Angeles in 2016, I began to dig deeper into CS, learning
								code in order to create web apps for my own multimedia
								aspirations. Initially tackling Javascript and Ruby, I began
								venturing into React & React-Native to build full stack
								responsive web and mobile applications.
							</p>
						</article>
					</section>
				</div>

				<div className="bio-p-one">
					<section data-scroll-section>
						<p className="prose column-text text-black mb-4">
							I have experience in the US as well as Southeast Asia, where I
							started working commercially in 2018.
						</p>
						<p className="prose text-black column-text">
							I'm interested in new challenging and dynamic environments where I
							can continue my expansion as a software engineer. If you'd like to
							see if I'm a good fit for your organization, feel free to contact
							me at erik@rsa-labs.tech or click this link{" "}
							<a href={contactWindow} className="cursor-pointer">
								<span className="text-red-500">here</span>
							</a>
							.
						</p>
					</section>
				</div>
				<div className="bio-p-one">
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
