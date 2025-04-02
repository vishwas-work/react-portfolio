import Skills from "../components/skillData";
import { Experienced } from "../components";
import { useEffect } from "react";
const MainPage = () => {
  useEffect(() => {
    document.title = "portfolio";
  }, []);

  return (
    <>
      <div className="d-block d-xl-none">
        <div className="tmp-popup-mobile-menu">
          <div className="inner">
            <div className="header-top">
              <div className="logo">
                <a href="index.html" className="logo-area">
                  <img
                    className="logo-dark log1"
                    src="assets/images/logo/log1.png"
                    alt="logo"
                  />
                  <img
                    className="logo-white"
                    src="assets/images/logo/logo-white.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="close-menu">
                <button className="close-button tmp-round-action-btn">
                  <i className="fa-sharp fa-light fa-xmark"></i>
                </button>
              </div>
            </div>
            <ul className="tmp-mainmenu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="has-dropdown">
                <a href="#">
                  Services
                  <i className="fa-regular fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#">
                  Blog
                  <i className="fa-regular fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="blog.html">Blog classNameic</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#">
                  Project
                  <i className="fa-regular fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="project.html">Project</a>
                  </li>
                  <li>
                    <a href="project-details.html">Project Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>

            <div className="social-wrapper mt--40">
              <span className="subtitle">find with me</span>
              <div className="social-link">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
            {/* <!-- social area end --> */}
          </div>
        </div>
      </div>

      <div className="tmp-banner-one-area">
        <div className="container">
          <div className="banner-one-main-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="banner-right-content">
                  <img
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    src="assets/images/banner/persoal.png"
                    alt="banner-img"
                  />
                  <h2 className="banner-big-text-1 up-down">WEB DESIGNER</h2>
                  <h2 className="banner-big-text-2 up-down-2">WEB DESIGNER</h2>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="inner">
                  <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Hello
                  </span>
                  <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                    I am, Vishwas Shivsamb
                    <br />
                    <span className="header-caption">
                      <span className="cd-headline clip is-full-width">
                        <span className="cd-words-wrapper">
                          <b className="is-visible theme-gradient">
                            Full Stack Developer
                          </b>
                          <b className="is-hidden theme-gradient">
                            PHP Developer
                          </b>

                          <b className="is-hidden theme-gradient">
                            React.js Developer
                          </b>
                          <b className="is-hidden theme-gradient">
                            Node.js Developer
                          </b>
                          <b className="is-hidden theme-gradient">
                            JavaScript Expert
                          </b>
                          <b className="is-hidden theme-gradient">
                            Web Development
                          </b>
                          <b className="is-hidden theme-gradient">
                            MySQL Developer
                          </b>
                        </span>
                      </span>
                    </span>
                  </h1>
                  <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Experienced Full Stack Web Developer with expertise in{" "}
                    <span style={{ color: "#bdfffc" }}>PHP</span>,{" "}
                    <span style={{ color: "#bdfffc" }}>JavaScript</span>,{" "}
                    <span style={{ color: "#bdfffc" }}>MySQL</span>,{" "}
                    <span style={{ color: "#bdfffc" }}>React</span>,{" "}
                    <span style={{ color: "#bdfffc" }}>Nodejs</span>,{" "}
                    <span style={{ color: "#bdfffc" }}>
                      MVC (Model-View-Controller)
                    </span>{" "}
                    architecture, ensuring clean, maintainable, and scalable
                    code. I am passionate about building dynamic and
                    user-friendly applications that drive business growth. I
                    have professional experience working with ERP systems and
                    e-commerce sites, using frameworks like{" "}
                    <span style={{ color: "#bdfffc" }}>CodeIgniter</span>,{" "}
                    <span style={{ color: "#bdfffc" }}>Bootstrap</span>,{" "}
                    <span style={{ color: "#bdfffc" }}>HTML</span>, and{" "}
                    <span style={{ color: "#bdfffc" }}>CSS</span>. My work also
                    includes extensive use of{" "}
                    <span style={{ color: "#bdfffc" }}>jQuery</span> for
                    interactive user interfaces.
                  </p>
                  <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <a
                      className="tmp-btn hover-icon-reverse radius-round"
                      // href="project.html"
                      href="resume/resume.pdf"
                      target="blank"
                    >
                      {/* <a class="btn btn-primary"> */}
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="service-area tmp-section-gap"></section>

      <section className="counter-area">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
                <div className="year-expariance-wrap">
                  {/* <!-- <h2 className="year-number"><span className="counter">25 </span> </h2> --> */}
                  <h2 className="counter year-number">
                    <span className="odometer" data-count="3.2">
                      00
                    </span>
                  </h2>
                  <h3 className="year-title">
                    Years Of <br /> experience
                  </h3>
                </div>
                {/* <p className="year-para">
                  Business consulting consultants provide expert advice and
                  guida the a businesses to help theme their performance
                  efficiency
                </p> */}
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="counter-area-right-content">
                <div className="row g-5">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                      <h6
                        className="counter counter-title"
                        style={{ fontSize: "21px", color: "#4CAF50" }}
                      >
                        <i
                          className="fa-solid fa-graduation-cap"
                          style={{ marginRight: "8px", color: "#2196F3" }}
                        ></i>
                        Education:
                      </h6>
                      <p className="counter-para" style={{ color: "#2196F3" }}>
                        Bachelor's in Electronics and Telecommunication
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                      <h6
                        className="counter counter-title"
                        style={{ fontSize: "21px", color: "#4CAF50" }}
                      >
                        <i
                          className="fa-solid fa-university"
                          style={{ marginRight: "8px", color: "#2196F3" }}
                        ></i>
                        College:
                      </h6>
                      <p className="counter-para" style={{ color: "#2196F3" }}>
                        JSPM's Imperial College of Engineering and Research{" "}
                        <b>Pune</b>.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <h3 className="counter counter-title">
                        <span className="odometer" data-count="6">
                          00
                        </span>
                        +
                      </h3>
                      <p className="counter-para">
                        <span role="img" aria-label="checkmark">
                          ✅
                        </span>{" "}
                        Project Complete
                      </p>
                    </div>
                  </div>{" "}
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                      <h6
                        className="counter counter-title"
                        style={{ fontSize: "21px", color: "#4CAF50" }} // Adjust color as needed
                      >
                        Work for Domains Like:
                      </h6>
                      <p
                        className="counter-para"
                        style={{ color: "#2196F3" }} // Adjust color as needed
                      >
                        - Education <br />
                        - Construction <br />- E-commerce
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Experienced />
    </>
  );
};

export default MainPage;
