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
                className="bio-text mb-5 text-white"
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top"
              >
                My name is{" "}
                <span className=" text-rose-400">Erick H.Robertson</span>, or
                better known as{" "}
                <span className=" text-emerald-300">Erick HR</span>.
              </h1>
            </article>

            <article className="prose prose-xl prose-slate">
              <p className="column-text text-white">
                I'm a developer, photographer, visualist, and tinkerer. A
                product of <span className="text-amber-200">Generation Y</span>,
                I grew up immersed and inspired by the dystopian urban landscape
                of Detroit.
              </p>
            </article>
          </section>
        </div>

        <div className="bio-p-one">
          <section data-scroll-section>
            <article className="prose prose-xl">
              <p className="column-text text-white">
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
            <p className="prose prose-xl text-white column-text">
              In 2018, I moved to{" "}
              <span className="text-red-300">Southeast Asia</span> and began to
              work commercially, while also working hands on in{" "}
              <span className="text-amber-200">Product Management</span>,
              expirmenting with Multi-Platform Applications,{" "}
              <span className=" text-emerald-500">
                Contactless Payment Systems (QR),{" "}
              </span>
              App Decoupling,Microservices, Messaging, and more.
            </p>
          </section>
          <section data-scroll-section>
            <div className="my-toolbox mt-10">
              <h1
                className=" text-center text-white"
                data-scroll
                data-scroll-speed="1"
                data-scroll-position="top"
              >
                Here's what's in my toolkit:
              </h1>
              <div className="button-grid">
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
      </div>
    </div>
  );
}

export default About;
