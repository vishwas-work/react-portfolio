// import "resume.css";
import { LinkAchor } from "../components";
import { useEffect } from "react";
// import "./resume.css";

const Resume = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/resume.css"; // Corrected path
    link.id = "resume-css";
    document.head.appendChild(link);

    return () => {
      document.getElementById("resume-css")?.remove();
    };
  }, []);

  return (
    <div className="tmp-banner-one-area">
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
            <div id="stellar-eastern-blue" className="resume-page">
              <div className="header-info">
                <div className="name-pic">
                  <div className="name-role">
                    <h2 className="name">SHIVSAMB VISHWAS</h2>
                    <h3 className="role">Sr. Full Stack Web Developer</h3>
                  </div>
                </div>
                <div className="contact-info">
                  <ul>
                    <li>
                      <a href="tel:9309125030" className="mobile">
                        9309125030
                      </a>
                      <img
                        src="https://st-content.myoutspark.com/OUTSPARK_HTMLS/static/203/img/mobile.svg"
                        alt=""
                      />
                    </li>

                    <li>
                      <a
                        href="mailto:vishwas.dev.work@gmail.com"
                        className="email"
                      >
                        vishwas.dev.work@gmail.com
                      </a>
                      <img
                        src="https://st-content.myoutspark.com/OUTSPARK_HTMLS/static/203/img/email.svg"
                        alt=""
                      />
                    </li>

                    <li>
                      <span>Pune, MH, India</span>
                      <img
                        src="https://st-content.myoutspark.com/OUTSPARK_HTMLS/static/203/img/location.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/vishwas-shiv"
                        // style="text-decoration: none;"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        Linkedin
                      </a>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                        // style="margin-left:5px;"
                        style={{ marginLeft: "5px" }}
                      >
                        <g fill="none">
                          <rect width="256" height="256" fill="#fff" rx="60" />
                          <rect
                            width="256"
                            height="256"
                            fill="#21a199"
                            rx="60"
                          />
                          <path
                            fill="#fff"
                            d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                          />
                        </g>
                      </svg>
                    </li>
                    <li>
                      <a
                        href="https://github.com/vishwas-work"
                        className="email"
                      >
                        GitHub
                      </a>
                      &nbsp; &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style={{ color: "#21a199" }}
                      >
                        <path
                          fill="currentColor"
                          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                        />
                      </svg>
                      {/* <!--             <img src="https://st-content.myoutspark.com/OUTSPARK_HTMLS/static/203/img/git.svg" alt=""> --> */}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="summary-column">
                <section className="tech-skill">
                  <h2 className="section-title">Technical Skills</h2>
                  <ul className="skills-list">
                    <li>
                      <strong>Programming Languages:</strong> PHP,OOP,
                      JavaScript (ES6+), HTML, CSS
                    </li>
                    <li>
                      <strong>Frameworks & Tools:</strong> CodeIgniter 4, React,
                      Node.js, Express.js, Redux Toolkit, jQuery, Bootstrap,
                      Tailwind CSS
                    </li>
                    <li>
                      <strong>Version Control:</strong> Git, GitHub
                    </li>
                    <li>
                      <strong>Database Management:</strong> MySQL (Optimized
                      Queries, Complex Joins)
                    </li>
                    <li>
                      <strong>APIs:</strong> RESTful API design and
                      implementation
                    </li>
                    <li>
                      <strong>Testing:</strong> Unit Testing, Debugging,
                      Integration Testing
                    </li>
                    <li>
                      <strong>Deployment:</strong> Server Configuration,
                      Application Hosting
                    </li>
                  </ul>
                </section>

                <section className="core-competencies-section">
                  <h2 className="section-title">Core Competencies</h2>
                  <ul className="competency-list">
                    <li>Full Stack Development</li>
                    <li>API Development & Integration</li>
                    <li>Database Management & Optimization (MySQL)</li>
                    <li>Scalable Architecture Design</li>
                    <li>Cross-Functional Collaboration</li>
                    <li>Responsive UI/UX Design</li>
                    <li>Problem Solving & Debugging</li>
                    <li>Continuous Learning & Adaptation</li>
                    <li>Client Interaction & Technical Support</li>
                  </ul>
                </section>

                <section className="education-section">
                  <h2 className="section-title">Education</h2>
                  <ul className="education-list">
                    <li>
                      <strong>
                        Bachelor of Engineering (BE) in Electronics and
                        Telecommunication (E&TC)
                      </strong>
                      <br />
                      JSPM Imperial College of Engineering and Research, Pune
                      <br />
                      Savitribai Phule Pune University
                      <br />
                      <span className="year">Graduated: November 2015</span>
                    </li>
                  </ul>
                </section>

                <section className="certifications-section">
                  <h2 className="section-title">Certifications</h2>
                  <ul className="certifications-list">
                    <li>
                      Object Oriented PHP & MVC <span>(Udemy)</span>
                    </li>
                    <li>
                      Make a Spotify Clone from Scratch: JavaScript PHP and
                      MySQL <span>(Udemy)</span>
                    </li>
                    <li>
                      The Complete 2024 Web Development Bootcamp{" "}
                      <span>(Udemy)</span>
                    </li>
                    <li>
                      The Ultimate React Course 2024: React, Next.js, Redux &
                      More<span>(Udemy)</span>
                    </li>
                  </ul>
                </section>
                <br />
                <br />
              </div>
              <div className="detail-column">
                <section>
                  <h2 className="section-title">Professional Summary</h2>
                  <p>
                    Experienced Full Stack Web Developer with{" "}
                    <strong>3.2 years</strong> of hands-on expertise in creating
                    dynamic, user-friendly web applications. Highly skilled in{" "}
                    <strong>PHP</strong>, <strong>JavaScript</strong>,{" "}
                    <strong>React</strong>, <strong>Node.js</strong>,{" "}
                    <strong>jQuery</strong>, and <strong>MySQL</strong>, with a
                    strong focus on developing scalable architectures and
                    integrating robust APIs.
                  </p>

                  <p>
                    Successfully developed and deployed{" "}
                    <strong>6+ custom ERP systems</strong> and{" "}
                    <strong>e-commerce platforms</strong>, driving business
                    growth and improving operational efficiency for clients.
                  </p>
                </section>

                <section className="work-exp">
                  <h2 className="section-title">Work Experience</h2>

                  <div className="sidebar-line">
                    <div className="work-experience-content">
                      <div className="work-experience-set">
                        <div className="work-experience-date">
                          <p className="duration">2021 - 2024</p>
                        </div>

                        <div className="work-experience-data">
                          <h4 className="job-role">Full Stack Web Developer</h4>
                          <h6 className="company">
                            Comzent Technologies Pvt. Ltd., Mumbai
                          </h6>
                          {/* style="color: darkkhaki;" */}
                          <p style={{ color: "darkkhaki" }}>
                            <strong>Responsibilities:</strong>
                          </p>
                          <ul>
                            <li>
                              Collaborated with{" "}
                              <b>
                                designers, front-end developers, and project
                                managers{" "}
                              </b>
                              to gather and translate functional requirements
                              into technical 6+ web and ERP projects
                            </li>
                            {/* <!--                   <li>Managed client communication, ensuring all deliverables met standards, guidelines, and deadlines with a 98% success rate.</li> -->
                                    <li>Building PHP <b>Websites And ERP </b> using PHP-based frameworks.</li>

                                    <li>Conducted rigorous testing and validation for <b>100% bug-free deployment,</b> ensuring high-quality deliverables..</li>
                                    <!--                   <li>Developing advanced database-driven websites and systems, including eCommerce platforms.</li> -->
                                    <li>Maintained and optimized back-end architecture using PHP and MySQL, achieving <b>20%</b> faster server response times.</li>
                                    <!--                   <li>Developing compatible user interface functionality using jQuery and other libraries.</li> -->
                                    <li>Building websites using <b> MySQL, PHP, Jquery, Javascript </b> and other programming tools.</li>

                                    <!--                   <li>Documenting features, technical specifications, and infrastructure requirements.</li> -->
                                    <!--                   <li>Collaborating with a multi-disciplinary team to convert business needs into technical specifications.</li> --> */}
                          </ul>

                          <p style={{ color: "darkkhaki" }}>
                            <strong>Key Skills and Competencies :</strong>
                          </p>
                          <ul>
                            <li>
                              Demonstrated ability to multi-task and prioritize
                              effectively, ensuring timely project delivery.
                            </li>
                            <li>
                              Proactive, confident, and with a{" "}
                              <b>positive "can-do" attitude</b>.
                            </li>
                            {/* <!--                   <li>Able to clearly communicate technical data to non-technical colleagues and clients.</li> --> */}
                            <li>
                              Continuously monitored industry trends to
                              incorporate cutting-edge technologies and best
                              practices.
                            </li>

                            <li>
                              Excellent attention to detail in{" "}
                              <b>both front-end and back-end development.</b>
                            </li>
                            <li>
                              Solid experience in Object-Oriented Programming
                              (OOP), PHP, AJAX, MySQL, JavaScript, Node.js,
                              React, HTML, and CSS.
                            </li>
                          </ul>
                          <p style={{ color: "darkkhaki" }}>
                            <strong> Key Achievements :</strong>
                          </p>
                          <ul>
                            <li>
                              Successfully implemented secure API integrations
                              for <b>5+ mobile apps,</b> ensuring seamless data
                              synchronization.
                            </li>
                            {/* <!--                   <li>Reduced website loading times by <b>30%</b> through front-end optimization and CDN integration.</li> --> */}
                            {/* <!--                   <li>Trained and mentored a team of <b>3 junior developers</b>, improving team productivity by 20%.</li> --> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-line">
                    <div className="work-experience-content">
                      <div className="work-experience-set">
                        <div className="work-experience-date">
                          <p className="duration"> 2018 – 2021</p>
                        </div>

                        <div className="work-experience-data">
                          <h4 className="job-role">Installation Engineer</h4>
                          <h6 className="company">
                            HealthATM India Pvt. Ltd., Pune
                          </h6>
                          <ul>
                            <li>
                              Deployed <b>100+ software installations</b> across
                              diverse environments, ensuring 100%
                              hardware-software integration.
                            </li>
                            <li>
                              Delivered training to 50+ clients, increasing user
                              efficiency by 30% through clear instructions and
                              post-installation support.
                            </li>
                            <li>
                              Built troubleshooting documentation, reducing
                              on-site issue resolution time by 40%.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="project">
                  <h2
                    className="section-title"
                    //    style="width: 500px;"
                    style={{ width: "500px" }}
                  >
                    Key Projects
                  </h2>

                  <span className="item mr_item">
                    <h3
                      //  style="font-size: larger;font-size: large; color: #0d6efd; font-weight: 600;"
                      style={{
                        fontSize: "large",
                        color: "#0d6efd",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      BCSTEP (Construction Industry ERP)
                    </h3>
                    <p>
                      <strong>Purpose:</strong>A user-friendly ERP platform that
                      simplifies construction management and improves teamwork
                      among all project participants.
                    </p>
                    <p>
                      <strong>Technologies Used:</strong> HTML, CSS, Bootstrap,
                      JavaScript, jQuery, PHP, MySQL, CodeIgniter
                    </p>
                    <p>
                      <strong>Action:</strong>
                    </p>
                    <ul>
                      <li>
                        Developed and implemented front-end and back-end
                        solutions to enhance usability and performance for the
                        BCSTEP ERP platform.
                      </li>
                      <li>
                        Optimized database queries, improving data retrieval
                        speed and reducing server load, resulting in higher
                        system efficiency.
                      </li>
                      <li>
                        Integrated real-time data tracking for enhanced
                        reporting and decision-making.
                      </li>
                      <li>
                        Developed automated alert systems to improve scheduling
                        and quality control.
                      </li>
                      <li>
                        Led the integration of ProChat and ProCom for seamless
                        communication among project stakeholders.
                      </li>
                      <li>
                        Integrated APIs for Android APK, enabling real-time data
                        synchronization between the mobile app and ERP platform.
                      </li>
                    </ul>
                    <p>
                      <strong>Result:</strong>
                    </p>
                    <ul>
                      <li>
                        Increased system performance by <b>40%</b>, leading to
                        faster data processing and better project tracking.
                      </li>
                      <li>
                        Enhanced communication and task management, reducing
                        delays and improving coordination.
                      </li>
                      <li>
                        Improved real-time reporting, contributing to
                        higher-quality project deliveries.
                      </li>
                      <li>
                        API integration enhanced the mobile user experience and
                        data synchronization.
                      </li>
                    </ul>

                    <LinkAchor>
                      {" "}
                      <strong>Project Link:</strong>{" "}
                      <a
                        href="https://www.bcstep.com"
                        className="anchotLik"
                        target="_blank"
                      >
                        BCSTEP
                      </a>
                    </LinkAchor>
                  </span>

                  <span className="item mr_item">
                    <h3
                      // style="font-size: larger;font-size: large; color: #0d6efd; font-weight: 600;"
                      style={{
                        fontSize: "large",
                        color: "#0d6efd",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      AMGOLD Bullion Platform (E-commerce Website)
                    </h3>
                    <p>
                      <b>Purpose:</b> AMGOLD is a trusted and secure platform
                      for purchasing gold. It offers a variety of gold-related
                      products and services, both online and in physical stores,
                      to ensure a seamless and joyful gold shopping experience.
                    </p>
                    <p>
                      <b>Contributions:</b>
                    </p>
                    <ul>
                      <li>
                        Integrated a user-friendly interface for managing B2B,
                        B2C gold transactions.
                      </li>
                      <li>
                        Designed a secure and scalable platform for managing{" "}
                        <b>1000+ daily</b> transactions, maintaining 99.9%
                        uptime.
                      </li>
                      <li>
                        Integrated payment systems with SSL encryption, ensuring
                        compliance and customer trust.
                      </li>
                    </ul>

                    <LinkAchor>
                      {" "}
                      <strong>Project Link:</strong>{" "}
                      <a
                        href="https://amgold.in"
                        target="_blank"
                        className="anchotLik"
                      >
                        AMGOLD
                      </a>
                    </LinkAchor>
                  </span>

                  <span className="item mr_item">
                    <h3
                      // style="font-size: larger;font-size: large; color: #0d6efd; font-weight: 600;"
                      style={{
                        fontSize: "large",
                        color: "#0d6efd",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      Wonder Learning (Education ERP)
                    </h3>
                    <p>
                      <b>Purpose:</b> Streamlined student management and
                      administrative processes for educational institutions by
                      Implementing scalable features like attendance tracking,
                      timetable generation, and efficient record management
                      using PHP, MySQL, Bootstrap, and jQuery.
                    </p>
                    <p>
                      <b>Contributions:</b>
                    </p>
                    <ul>
                      <li>
                        Optimized and maintained key features like attendance
                        tracking and timetable generation.
                      </li>
                      <li>
                        Streamlined student and staff management processes for
                        enhanced operational efficiency.
                      </li>
                      <li>
                        Improved data accuracy and reduced administrative
                        overhead through automated record management systems.
                      </li>
                      <li>
                        Automated attendance tracking for<b> 1000+ students </b>
                        across 5+ institutions, saving 2+ hours of
                        administrative work weekly.
                      </li>
                      <li>
                        Improved data accuracy by <b>95%</b> through robust
                        validation systems.
                      </li>
                    </ul>

                    <LinkAchor>
                      {" "}
                      <strong>Project Link:</strong>{" "}
                      <a
                        href="https://wonderlearning.in"
                        target="_blank"
                        className="anchotLik"
                      >
                        Wonder Learning
                      </a>
                    </LinkAchor>
                  </span>

                  <span className="item mr_item">
                    <h3
                      // style="font-size: larger;font-size: large; color: #0d6efd; font-weight: 600;"
                      style={{
                        fontSize: "large",
                        color: "#0d6efd",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Taskify - Task Management App & Portfolio Website
                      (Personal Projects, 2025)
                    </h3>

                    <p>
                      <b>Taskify:</b> A full-stack task management app with user
                      authentication, protected routes, and REST API
                      integration.
                    </p>
                    <ul>
                      <li>
                        Built with{" "}
                        <b>
                          React, Redux Toolkit, Node.js, Express.js, and Mysql
                        </b>
                        .
                      </li>
                      <li>
                        Implemented <b>secure authentication</b> and optimized
                        API performance.
                      </li>
                      <li>
                        Deployed frontend on <b>Netlify</b> and backend on{" "}
                        <b>vercel</b> deploy Render.
                      </li>
                    </ul>
                    <LinkAchor>
                      <b>Live Demo:</b>{" "}
                      <a
                        href="https://tinyurl.com/createTask12"
                        target="_blank"
                        className="anchotLik"
                      >
                        Taskify
                      </a>{" "}
                      | <b>GitHub:</b>{" "}
                      <a
                        href="https://github.com/vishwas-work"
                        target="_blank"
                        className="anchotLik"
                      >
                        View Code
                      </a>
                    </LinkAchor>
                  </span>
                  <span className="item mr_item">
                    <h3
                      // style="font-size: larger;font-size: large; color: #0d6efd; font-weight: 600;"
                      style={{
                        fontSize: "large",
                        color: "#0d6efd",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <b>Portfolio Website:</b> A dynamic personal portfolio
                      showcasing my skills, resume, and projects. (Personal
                      Projects, 2025)
                    </h3>

                    <ul>
                      <li>
                        Developed using <b>CodeIgniter 4</b>, Bootstrap, and
                        Tailwind CSS.
                      </li>
                      <li>
                        Designed a <b>multi-page layout</b> (Home, About,
                        Resume, Projects, Contact).
                      </li>
                      <li>
                        Deployed on <b>InfinityFree</b>{" "}
                        (http://portfolio-vish.rf.gd/).
                      </li>
                    </ul>
                    <LinkAchor>
                      <b>Live Demo:</b>
                      <a
                        href="http://portfolio-vish.rf.gd/"
                        target="_blank"
                        className="anchotLik"
                      >
                        Portfolio Website
                      </a>{" "}
                      | <b>GitHub:</b>{" "}
                      <a
                        href="https://github.com/vishwas-work/vishwas-portfolio-ci4"
                        target="_blank"
                        className="anchotLik"
                      >
                        View Code
                      </a>
                    </LinkAchor>
                  </span>
                  <span className="item mr_item">
                    <h3
                      style={{
                        fontSize: "large",
                        color: "#0d6efd",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                    >
                      <b>Portfolio Website:</b> Using React (Personal Projects,
                      2025)
                    </h3>

                    <ul>
                      <li>
                        Developed using <b>React.js</b>, Tailwind CSS, and
                        Framer Motion.
                      </li>
                      <li>
                        Designed a <b>multi-page layout</b> (Home, About,
                        Resume, Projects, Contact) with <b>React Router</b> for
                        seamless navigation.
                      </li>
                      <li>
                        Integrated a <b>Resume section</b> with a PDF viewer and
                        download option.
                      </li>
                      <li>
                        Enhanced UI/UX with <b>Framer Motion animations</b> and
                        modern styling.
                      </li>
                      <li>
                        Deployed on <b>Vercel</b> for fast performance and
                        scalability.
                      </li>
                    </ul>

                    <LinkAchor>
                      <b>Live Demo:</b>
                      <a
                        href="http://portfolio-vish.rf.gd/"
                        target="_blank"
                        className="anchotLik"
                      >
                        Portfolio Website
                      </a>{" "}
                      | <b>GitHub:</b>{" "}
                      <a
                        href="https://github.com/vishwas-work/vishwas-portfolio-react"
                        target="_blank"
                        className="anchotLik"
                      >
                        View Code
                      </a>
                    </LinkAchor>
                  </span>
                </section>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Resume;
