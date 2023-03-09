import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import image from "../../assets/luang_prabang.png";
import { skills, employers } from "./copy";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const contactWindow =
  "https://us12.list-manage.com/contact-form?u=4c68b3868e9ccb3d5f2d73efc&form_id=852e6db71dd5fb0628fe2389c79ab783";

function About() {
  const scrollRef = React.createRef();

  const [tableView, setTableView] = useState(0);

  function handleTableView(id) {
    setTableView(id);
  }

  useEffect(() => {
    // const scroll = new LocomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true,
    // });
  }, []);
  return (
    <div
      className="container scroll container-adj profile-container"
      ref={scrollRef}
    >
      <div className="bio-container">
        <div className="bio-p-one">
          <section data-scroll-section>
            <div className="profile-header border-x-2 h-52 min-w-full mb-5 overflow-hidden items-center">
              <img
                src="https://i.imgur.com/DRJZzlh.png"
                className="profile-banner-image min-w-full min-h-full"
              />
            </div>
            <article>
              <h1
                className="bio-text mb-5 text-black"
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="top"
              >
                ABOUT
              </h1>
            </article>
          </section>
          <section data-scroll-section>
            <div className="profile-upper">
              <div className="flex lg:flex-row responsive-profile justify-between">
                <div className="profile-image-container w-40 h-40 mt-20 mb-20 mx-auto overflow-hidden">
                  <img
                    src="https://i.imgur.com/MJoWqKO.png"
                    alt=""
                    className="min-h-full min-w-full"
                  />
                </div>

                <div className="profile-stats-container md:ml-5 text-black">
                  <div className="namespace text-left md:ml-10 mt-10 mr-3">
                    <h1 className="text-lef text-2xl">Erik Robertson</h1>

                    <div className="text-container mt-10">
                      <h6 className="tagline-type">DEVELOPER.</h6>
                      <p className="entry-type">
                        Software Engineer | Photographer | Thinker
                      </p>
                    </div>
                    <div className="text-container mt-10">
                      <h6 className="tagline-type">EMAIL</h6>
                      <p className="entry-type">erik@rsa-labs.tech</p>
                    </div>
                    <div className="flex flex-row -ml-4 mt-16">
                      <ul className="flex flex-row footer-ul">
                        <a href="https://github.com/speechiex">
                          <li className="m-4 main-icons">
                            <AiOutlineGithub className="" />
                          </li>
                        </a>
                        <a href="https://linkedin.com/in/erikhr">
                          <li className="m-4 main-icons">
                            <AiFillLinkedin />
                          </li>
                        </a>
                        <a href="https://instagram.com/speechieforprez">
                          <li className="m-4 main-icons">
                            <AiOutlineInstagram />
                          </li>
                        </a>
                        <a href="https://twitter.com/speechieforprez">
                          <li className="m-4 main-icons">
                            <AiOutlineTwitter />
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bio-p-one">
          <section className="flex flex-col mx-auto text-center">
            <p className="mx-auto prose text-center text-black">
              I'm a developer, photographer, visualist, and tinkerer. A product
              of the City of Detroit, I started building apps to solve real
              world problems that I saw around me.
              <br></br>
              <br></br>
              Over the past several years, I've been highly motivated to create
              innovative and prestine software solutions. After moving to Los
              Angeles in 2016, I began to dig deeper into CS, learning code in
              order to create web apps for my own multimedia aspirations.
              Initially tackling Javascript and Ruby, I began venturing into
              React & React-Native to build full stack responsive web and mobile
              applications.
            </p>
            <p className="mx-auto text-center prose text-black ">
              Feel free to contact me at erik@rsa-labs.tech or click this link{" "}
              <a href={contactWindow} className="cursor-pointer">
                <span className="text-red-500">here</span>
              </a>
              .
            </p>
          </section>
        </div>
        <div className="add-border scroll-section mt-20 mb-20">
          <div className="text-black mb-10">
            <h1 className="text-right">Places I've Worked</h1>
          </div>
          <div className="table-section">
            <section className="flex flex-row mx-auto text-center">
              <table className="table-info-section w-1/6">
                <tbody>
                  {employers.map((e) => (
                    <tr
                      className="flex"
                      onClick={() => handleTableView(e.id - 1)}
                    >
                      <td className=" w-40 text-left text-sm text-black h-10 hover:bg-black pl-2 pt-2 mb-3 hover:text-white">
                        {e.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="ml-2 table-display-body h-auto text-left text-black">
                <h1 className="display-project-title mb-2 ml-1">
                  {employers[tableView].title}
                </h1>
                <h2 className="display-project-headline mb-2 ml-2">
                  {employers[tableView].info}
                </h2>
                <h3 className="display-project-date mb-2 ml-2">
                  {employers[tableView].date}
                </h3>
                <p className="display-project-stack mb-2 ml-2">
                  {employers[tableView].stack}
                </p>

                {employers[tableView].summary.map((point) => (
                  <div className="flex flex-row justify-start mr-2 mt-4">
                    <span>*</span>
                    <p className="display-project-summary mt-2 ml-2">{point}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
