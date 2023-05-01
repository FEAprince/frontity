import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ApiCall from "../../../ApiCall";

function ContactTwo() {
  const apiData = ApiCall("contact-us");
  const headerData = apiData?.jsonData[0]?.acf;
  console.log("headerData:", headerData);
  return (
    <div className="rn-contact-top-area ptb--120 bg_color--5">
      <div className="container">
        <div className="row">
          {/* Start Single Address  */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="rn-address">
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: headerData?.contact_numbers_image,
                }}
              ></div>
              <div className="inner">
                <h4 className="title">{headerData?.contact_numbers_title}</h4>
                {headerData?.contact_numbers_repeated?.map((val, i) => {
                  return (
                    <p>
                      <a href={`tel:+${val?.contact_numbers_text}`}>
                        {val?.contact_numbers_text}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          {/* End Single Address  */}

          {/* Start Single Address  */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
            <div className="rn-address">
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: headerData?.contact_email_image,
                }}
              ></div>
              <div className="inner">
                <h4 className="title">{headerData?.contact_email_title}</h4>
                {headerData?.contact_email_repeated?.map((val, i) => {
                  return (
                    <p>
                      <a href={`mailto:${val?.contact_email_text}`}>
                        {val?.contact_email_text}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          {/* End Single Address  */}

          {/* Start Single Address  */}
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
            <div className="rn-address">
              <div
                className="icon"
                dangerouslySetInnerHTML={{
                  __html: headerData?.contact_address_image,
                }}
              ></div>
              <div className="inner">
                {headerData?.contact_address_title}
                <h4 className="title"></h4>
                {headerData?.contact_address_repeated?.map((val, i) => (
                  <p>
                    {val?.contact_address_text}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* End Single Address  */}
        </div>
      </div>
    </div>
  );
}
export default ContactTwo;
