import ApiCall from "../../../ApiCall";
import img from "../../../assets/images/finding-us-01.jpg";
function AboutUsFindingArea() {
  const apiData = ApiCall("about");
  const headerData = apiData?.jsonData[0]?.acf;
  return (
    <div className="rn-finding-us-area rn-finding-us bg_color--1">
      <div className="inner">
        <div className="content-wrapper">
          <div className="content">
            <h4 className="theme-gradient">
              {headerData?._nuestros_servicios_title}
            </h4>
            <p
              dangerouslySetInnerHTML={{
                __html: headerData?.nuestros_servicios_description,
              }}
            ></p>
            <a className="rn-btn btn-white" href={headerData?._nuestros_servicios_btn?.url}>
              {headerData?._nuestros_servicios_btn?.title}
            </a>
          </div>
        </div>
        <div className="thumbnail">
          <div className="image">
            <img
              src={headerData?.nuestros_servicios_image?.url}
              alt="Finding Images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsFindingArea;
