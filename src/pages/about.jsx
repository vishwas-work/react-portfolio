import { Link } from "react-router-dom";
import { IconAbout } from "../components";
const About = () => {
  //   const [coords, setCoords] = useState({ x: "121px", y: "84px" });
  return (
    <>
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">About Me</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                  <li className="tmp-breadcrumb-item active">About Me</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="get-in-touch-area tmp-section-gapBottom">
        <div className="container">
          <div className="contact-get-in-touch-wrap">
            <div
              className="get-in-touch-wrapper tmponhover"
              style={{ "--x": "121px", "--y": "84px" }}
            >
              <p className="text-muted">
                A passionate and experienced Full Stack Web Developer with over
                <strong className="tw"> 3.2+ </strong> years of hands-on
                experience in building dynamic, user-centric web applications. I
                specialize in creating scalable and efficient software solutions
                using technologies like PHP, JavaScript (ES6+), React, Node.js,
                MySQL, and CodeIgniter 4.
              </p>
              <p>
                Throughout my career, I’ve successfully developed and deployed
                <strong className="tw"> 6+ custom ERP </strong> systems and
                e-commerce platforms, working closely with clients to understand
                their needs and translating them into high-quality solutions. My
                primary goal is to deliver robust web applications that help
                businesses streamline operations, enhance user experiences, and
                drive growth.
              </p>
              <p>
                In my previous role at{" "}
                <strong className="tw"> Comzent Technologies Pvt. Ltd.</strong>,
                I collaborated with cross-functional teams, optimized back-end
                architecture, and integrated secure APIs, significantly
                improving performance and scalability. I have also built and
                maintained multiple websites and ERP solutions for various
                industries, including construction, education, and e-commerce.
              </p>
              <p>
                When I’m not coding, I enjoy learning new technologies and
                staying up-to-date with industry trends. I believe in the power
                of continuous learning and always strive to improve my skills
                and adapt to new challenges.
              </p>
              <p className="fw-bold">
                Feel free to explore my projects below and get in touch if you’d
                like to collaborate or learn more about how I can help you bring
                your ideas to life!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="service-area tmp-section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <IconAbout
              title="Full Stack Development"
              iconClass="fa-solid fa-code"
            />
            <IconAbout
              title="API Development & Integration"
              iconClass="fa-solid fa-plug"
            />
            <IconAbout
              title="Database Management & Optimization (MySQL)"
              iconClass="fa-solid fa-database"
            />
            <IconAbout
              title="Scalable Architecture Design"
              iconClass="fa-solid fa-layer-group"
            />
            <IconAbout
              title="Responsive UI/UX Design"
              iconClass="fa-solid fa-paint-brush"
            />
            <IconAbout
              title="Problem Solving & Debugging"
              iconClass="fa-solid fa-bug"
            />
            <IconAbout
              title="MVC Architecture"
              iconClass="fa-solid fa-project-diagram"
            />
            <IconAbout title="Deployment" iconClass="fa-solid fa-server" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
