import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SocialLik } from "../components";

const Header = () => {
  return (
    <>
      <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="logo">
                  <Link to="/">
                    <img
                      className="logo-dark log1"
                      src="assets/images/logo/log1.png"
                      alt="logo"
                    />
                  </Link>
                </div>
                <nav className="tmp-mainmenu-nav d-none d-xl-block">
                  <ul className="tmp-mainmenu">
                    <li>
                      {/* <a href="/">Home</a> */}
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                        to="/"
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li>
                      {/* <a href="about.html">About</a> */}
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                        to="/about"
                      >
                        ABOUT
                      </NavLink>
                    </li>
                    <li>
                      {/* <a href="about.html">About</a> */}
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                        to="/projects"
                      >
                        PROJECT
                      </NavLink>
                    </li>
                    <li>
                      {/* <a href="contact.html">Contact</a> */}
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                        to="/resume"
                      >
                        VIEW CV
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="tmp-header-right">
                  <div className="social-share-wrapper d-none d-md-block">
                    <SocialLik />
                  </div>
                  {/* <div className="actions-area">
                    <div className="tmp-side-collups-area d-none d-xl-block">
                      <button className="tmp-menu-bars tmp_button_active">
                        <i className="fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                    <div className="tmp-side-collups-area d-block d-xl-none">
                      <button className="tmp-menu-bars humberger_menu_active">
                        <i className="fa-regular fa-bars-staggered"></i>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
