import img from "../../../assets/images/bg-image-17.jpg";
import {css} from "frontity"
import ApiCall from "../../../ApiCall";
function ContactBreadCrumb() {
  const apiData = ApiCall("contact-us");
  const headerData = apiData?.jsonData[0]?.acf;
  console.log("headerData:", headerData);
  return (
    <div
      className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
      css={css`
        background: url(${headerData?.inner_banner_image?.url});
      `}
      data-black-overlay="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rn-page-title text-center pt--100">
              <h2 className="title theme-gradient">{headerData?.inner_banner_title}</h2>
              <p dangerouslySetInnerHTML={{__html:headerData?.inner_banner_description}}>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactBreadCrumb;
