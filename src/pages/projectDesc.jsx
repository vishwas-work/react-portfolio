import React from "react";
import { useParams } from "react-router-dom";
import projects from "../components/projectInfo";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <>
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">Project Details</h1>
                <ul className="page-list">
                  <li className="tmp-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                  <li className="tmp-breadcrumb-item active">
                    Project Details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-details-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="project-details-content-wrap">
                <h2 className="title">{project.title}</h2>
                <p className="docs">{project.description}</p>

                <div className="check-box-wrap">
                  <ul>
                    {project.contributions.map((item, index) => (
                      <li key={index}>
                        <h4 className="check-box-item">
                          <span>
                            <i className="fa-solid fa-circle-check"></i>
                          </span>
                          {item}
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Project Details</h3>
                </div>
                <div className="body">
                  <div className="project-details-info">
                    Name: <span>{project.title}</span>
                  </div>
                  <div className="project-details-info">
                    Technologies: <span>{project.techStack.join(", ")}</span>
                  </div>
                  <div className="project-details-info">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ViewProject"
                    >
                      Project Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
