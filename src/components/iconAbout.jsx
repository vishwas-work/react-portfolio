import React from "react";

const IconAbout = ({ title, iconClass }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
        <div className="service-card-icon">
          <i className={iconClass}></i>
        </div>
        <h4 className="service-title">
          <a href="/">{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default IconAbout;
