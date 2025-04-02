import { SocialLik } from "./index";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              <div className="col-lg-5 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        className="log1"
                        src="assets/images/logo/log1.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <p className="description">
                    <span>Get Ready</span> To Create Great
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>

                  <ul className="ft-link tmp-link-animation">
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
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <a href="mailto:vishwas.work.dev@gmail.com">
                        vishwas.work.dev@gmail.com
                      </a>
                    </li>
                    <li className="white-text">
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                      Pune, India
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <a href="tel:+919309125030">9309125030</a>
                    </li>
                  </ul>

                  <SocialLik />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper">
                <p className="copy-right-para tmp-link-animation">
                  {" "}
                  ©
                  <a
                    href="https://themeforest.net/user/themes-park/portfolio"
                    target="_blank"
                  >
                    Vishwas{" "}
                  </a>
                  <script>document.write(new Date().getFullYear())</script> |
                  All Rights Reserved
                </p>
                {/* <ul className="tmp-link-animation">
                  <li>
                    <a href="#">Trams & Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
