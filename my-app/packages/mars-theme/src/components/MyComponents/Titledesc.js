import React from "react";

function Titledesc({ title, description }) {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="about-us-list">
        <h3 className="title">{title}</h3>
        <div dangerouslySetInnerHTML={{__html:description}}></div>
      </div>
    </div>
  );
}

export default Titledesc;
