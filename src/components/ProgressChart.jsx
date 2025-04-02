import React from "react";
import PropTypes from "prop-types";

const ProgressChart = ({
  skillName,
  experience,
  percentage,
  animationDelay,
  animationDuration,
}) => {
  return (
    <div className="progress-charts">
      <h6 className="heading heading-h6">
        {skillName}
        <small style={{ color: "#a1ffe4" }}>
          {` (${experience} Years Exp)`}
        </small>
      </h6>
      <div className="progress">
        <div
          className="progress-bar wow fadeInLeft"
          data-wow-duration={animationDuration}
          data-wow-delay={animationDelay}
          role="progressbar"
          style={{
            width: `${percentage}%`,
            visibility: "visible",
            animationDuration: animationDuration,
            animationDelay: animationDelay,
            animationName: "fadeInLeft",
          }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="percent-label">{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
ProgressChart.propTypes = {
  skillName: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  animationDelay: PropTypes.string,
  animationDuration: PropTypes.string,
};

ProgressChart.defaultProps = {
  animationDelay: ".3s",
  animationDuration: "0.5s",
};

export default ProgressChart;
