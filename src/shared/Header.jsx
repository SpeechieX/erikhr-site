import React, { useState, useEffect, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import logo from "../assets/logo.webp";
import { RiMailAddLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const titles = ["Home", "Gallery", "About", "Contact"];

const NavigationBar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const navRef = useRef();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(!drawer);
  };
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        !navBackground
          ? "upper-navigation flex bg-gradient-to-r from-gray-200 via-purple-200 to-cyan-300"
          : "upper-navigation flex bg-gradient-to-r  from-gray-200 via-purple-200 to-cyan-300 border-nav-shadow"
      }
    >
      <div className="flex flex-row min-w-full header-content justify-around">
        <img
          src={logo}
          alt="eriklovescode.work"
          className="header-logo ml-4 -mt-2"
        />
        <div className="flex">
          {/* THIS IS HIDDEN ON MEDIUM SCREENS */}
          <div className="navigation-list-container">
            <ul className="flex flex-row mt-4 ml-8">
              <div className="list-item-body">
                <li className="mb-1 mx-4 nav-list-item">
                  <a className="header-link-text" href="/">
                    Home
                  </a>
                </li>
              </div>
              <div className="list-item-body">
                <li className="mb-1 mx-4 nav-list-item">
                  <a className="header-link-text" href="/about">
                    About
                  </a>
                </li>
              </div>
              <div className="list-item-body">
                <li className="mb-1 mx-4 nav-list-item">
                  <a className="header-link-text" href="/gallery">
                    Gallery
                  </a>
                </li>
              </div>
              <div className="list-item-body">
                <li className="mb-1 mx-4 nav-list-item">
                  <a className="header-link-text" href="/contact">
                    Contact
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex flex-row">
          {/* BELOW : THIS IS HIDDEN IN DESKTOP VIEW*/}
          <div className="navigation-list-container-mobile">
            <ul className="flex flex-row m-2">
              <div className="list-item-body">
                <li className="mb-2 top-icons">
                  <a className="header-link-text" onClick={toggleDrawer(true)}>
                    <RxHamburgerMenu />
                  </a>
                  <Drawer
                    anchor="top"
                    open={drawer}
                    onClose={toggleDrawer(false)}
                  >
                    <div className="bg-gradient-to-r from-gray-200 via-purple-200 to-cyan-300 min-w-full drawer-body">
                      <div className="mobile-logo-container flex justify-center items-center w-2/3">
                        <img
                          src={logo}
                          alt="eriklovescode.work"
                          className="mr-4 -mt-2 mx-auto"
                        />
                      </div>
                      <div className="mobile-list-container">
                        <ul className="flex flex-col mt-4 text-center">
                          <div className="list-item-body my-3">
                            <li className="mb-1 mx-4 nav-list-item">
                              <a className="drawer-link-text-mobile" href="/">
                                Home
                              </a>
                            </li>
                          </div>
                          <div className="list-item-body my-3">
                            <li className="mb-1 mx-4 nav-list-item">
                              <a
                                className="drawer-link-text-mobile"
                                href="/about"
                              >
                                About
                              </a>
                            </li>
                          </div>
                          <div className="list-item-body my-3">
                            <li className="mb-1 mx-4 nav-list-item">
                              <a
                                className="drawer-link-text-mobile"
                                href="/gallery"
                              >
                                Gallery
                              </a>
                            </li>
                          </div>
                          <div className="list-item-body my-3">
                            <li className="mb-1 mx-4 nav-list-item">
                              <a
                                className="drawer-link-text-mobile"
                                href="/contact"
                              >
                                Contact
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </Drawer>
                </li>
              </div>
            </ul>
          </div>
          {/* ABOVE : THIS IS HIDDEN IN DESKTOP VIEW*/}
          <div className="navigation-list-container">
            <ul className="flex flex-row m-4">
              <div className="list-item-body">
                <li className="mb-1 mx-4 nav-list-item">
                  <a className="header-link-text" href="/contact">
                    CV/Resume
                  </a>
                </li>
              </div>
              <div className="list-item-body">
                <li className="mb-2 top-icons">
                  <a className="header-link-text" href="/about">
                    <RiMailAddLine />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className=" footer-container min-w-full mb-5 bg-gradient-to-r from-gray-200 via-purple-200 to-cyan-300 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row">
          <ul className="flex flex-row">
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
            <a href="https://instagram.com/speechieforprez"></a>
            <li className="m-4 main-icons">
              <AiOutlineInstagram />
            </li>
            <a href="https://twitter.com/speechieforprez">
              <li className="m-4 main-icons">
                <AiOutlineTwitter />
              </li>
            </a>
          </ul>
        </div>
        <h6 className="tip-text mb-3 text-slate-600">
          Buy me a coffee or a convertible :{" "}
        </h6>
        <pre className="w-address">
          0xaC25bC3589a60dA8Fde42A04934eCB2dd2E83fb7
        </pre>
      </div>
    </div>
  );
};

export default function Header({ children }) {
  return (
    <div className="header-body bg-gradient-to-r from-gray-200 via-purple-200 to-cyan-300">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
