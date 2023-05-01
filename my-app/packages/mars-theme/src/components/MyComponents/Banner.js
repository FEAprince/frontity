import Services from "./services";
import React  from "react";
import { connect } from "frontity";
import ApiCall from "../../ApiCall";


function Banner() {
  const apiData = ApiCall("home");
  const headerData =  apiData?.jsonData[0]?.acf;
  return (
    <div className="slider-activation">
      <div
        className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
        data-black-overlay="6"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h1 className="title theme-gradient">
                  {headerData?.hero_banner_title}
                </h1>
              </div>
            </div>
          </div>
          {/* Start Service Area */}
          <div className="service-wrapper service-white">
            <Services />
          </div>
          {/* End Service Area */}
        </div>
      </div>
    </div>
  );
}

export default connect(Banner);
