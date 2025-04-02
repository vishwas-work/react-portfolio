import React from "react";
import ProgressChart from "./ProgressChart";
const skillData = {
  frontend: [
    {
      skillName: "React",
      experience: "1",
      percentage: 80,
      animationDelay: "0.5s",
    },
    {
      skillName: "Next.js",
      experience: "1",
      percentage: 85,
      animationDelay: "1.3s",
    },
    {
      skillName: "Redux",
      experience: "1",
      percentage: 80,
      animationDelay: "1.5s",
    },
    {
      skillName: "TypeScript",
      experience: "1",
      percentage: 65,
      animationDelay: "1.9s",
    },
    {
      skillName: "Vite",
      experience: "1",
      percentage: 85,
      animationDelay: "1.7s",
    },
    {
      skillName: "CodeIgniter 4",
      experience: "2+",
      percentage: 85,
      animationDelay: "0.9s",
    },
    {
      skillName: "jQuery",
      experience: "3.2+",
      percentage: 90,
      animationDelay: "1.1s",
    },
    {
      skillName: "Bootstrap",
      experience: "3.2+",
      percentage: 90,
      animationDelay: "1.3s",
    },
    {
      skillName: "JavaScript",
      experience: "3.2+",
      percentage: 85,
      animationDelay: "0.9s",
    },
    {
      skillName: "Tailwind CSS",
      experience: "1",
      percentage: 60,
      animationDelay: "1.1s",
    },
    {
      skillName: "Material UI",
      experience: "1",
      percentage: 50,
      animationDelay: "1.9s",
    },
    {
      skillName: "HTML",
      experience: "3.2+",
      percentage: 100,
      animationDelay: "0.5s",
    },
    {
      skillName: "CSS",
      experience: "3.2+",
      percentage: 100,
      animationDelay: "0.7s",
    },
  ],

  backend: [
    {
      skillName: "PHP",
      experience: "3.2+",
      percentage: 100,
      animationDelay: "0.5s",
    },
    {
      skillName: "Node.js",
      experience: "1",
      percentage: 90,
      animationDelay: "0.7s",
    },
    {
      skillName: "Express.js",
      experience: "1",
      percentage: 90,
      animationDelay: "1.5s",
    },
    {
      skillName: "MongoDB",
      experience: "1",
      percentage: 50,
      animationDelay: "0.9s",
    },
    {
      skillName: "PHPUnit",
      experience: "2+",
      percentage: 85,
      animationDelay: "1.7s",
    },
    {
      skillName: "RESTful APIs",
      experience: "3.2+",
      percentage: 95,
      animationDelay: "1.1s",
    },
    {
      skillName: " (OOP)",
      experience: "3.2+",
      percentage: 90,
      animationDelay: "1.5s",
    },
    {
      skillName: "MySQL",
      experience: "3.2+",
      percentage: 90,
      animationDelay: "0.7s",
    },
  ],

  other: [
    {
      skillName: "Docker",
      experience: "1+",
      percentage: 30,
      animationDelay: "1.3s",
    },
    {
      skillName: "Git",
      experience: "3+",
      percentage: 75,
      animationDelay: "1.3s",
    },
    {
      skillName: "Application Hosting",
      experience: "1+",
      percentage: 75,
      animationDelay: "1.3s",
    },
    {
      skillName: "Linux",
      experience: "5+",
      percentage: 95,
      animationDelay: "1.3s",
    },
    {
      skillName: "Windows",
      experience: "5+",
      percentage: 95,
      animationDelay: "1.3s",
    },
  ],
};

const SkillSection = ({ title, skills }) => (
  <div className="col-lg-4">
    <div className="progress-wrapper">
      <div className="content">
        <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
          {title}
          <span>
            <img
              src="assets/images/custom-line/custom-line.png"
              alt="custom-line"
            />
          </span>
        </h2>
        {skills.map((skill, index) => (
          <ProgressChart
            key={index}
            skillName={skill.skillName}
            experience={skill.experience}
            percentage={skill.percentage}
            animationDelay={skill.animationDelay}
            animationDuration="0.5s"
          />
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className="tmp-skill-area tmp-section-gapTop">
    <div className="container">
      <div className="row g-5">
        <SkillSection title="Frontend Skills" skills={skillData.frontend} />
        <SkillSection title="Backend Skills" skills={skillData.backend} />
        <SkillSection title="Other Skills" skills={skillData.other} />
      </div>
    </div>
  </div>
);

export default Skills;
