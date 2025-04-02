import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const portfolioItems = [
    {
      imageSrc: "assets/images/project/bcstep.webp",
      title: "BCSTEP - Construction Industry ERP",
      description:
        "A user-friendly ERP platform that simplifies construction management and teamwork.",
      link: "./bcstep",
    },
    {
      imageSrc: "assets/images/project/womder.png",
      title: "Wonder Learning - Education ERP",
      description:
        "An ERP system for schools with attendance tracking and timetable generation.",
      link: "./wonder-learning",
    },
    {
      imageSrc: "assets/images/project/amrold.png",
      title: "AMGOLD Bullion Platform",
      description:
        "A secure platform for purchasing gold, managing transactions efficiently.",
      link: "./amgold",
    },
    {
      imageSrc: "assets/images/project/taskfiy.png",
      title: "Taskify - Task Management App(React,NodeJs,Express,Mysql)",
      description:
        "A full-stack task management application with secure authentication, state management, and REST API integration.",
      link: "./taskify",
    },
    {
      imageSrc: "assets/images/project/oldportFolio.png",
      title:
        " A dynamic personal portfolio showcasing my skills, resume, and projects.(CI4,PHP)",
      description:
        "Designed a multi-page layout (Home, About, Resume, Projects, Contact).",
      link: "./portfolio",
    },
    {
      imageSrc: "assets/images/project/newPort.png",
      title:
        " A dynamic personal portfolio showcasing my skills, resume, and projects.(React,NodeJs)",
      description: "Use of React,Boostrap,NodeJS",
      link: "/home",
    },
  ];

  const PortfolioCard = ({ imageSrc, title, description, link }) => {
    return (
      <div className="col-lg-4 col-md-4 col-12">
        <div className="latest-portfolio-card v5 tmp-hover-link">
          <div className="portfoli-card-img">
            <div className="img-box v2">
              <Link to={link} className="backGrodColor">
                <img
                  className="img-primary hidden-on-mobile"
                  src={imageSrc}
                  alt="Blog Thumbnail"
                />
                <img
                  className="img-secondary"
                  src={imageSrc}
                  alt="Blog Thumbnail"
                />
              </Link>
            </div>
            <Link to={link} className="img-link-icon">
              <i className="fa-solid fa-arrow-up-long"></i>
            </Link>
          </div>
          <div className="portfolio-card-content-wrap">
            <div className="content-left">
              <h3 className="portfolio-card-title">
                <Link className="link" to={link}>
                  {title}
                </Link>
              </h3>
              <p className="portfoli-card-para">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Projects</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                  <li className="tmp-breadcrumb-item active">Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="tmp-latest-portfolio tmp-section-gap">
        <div className="container">
          <div className="row">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
