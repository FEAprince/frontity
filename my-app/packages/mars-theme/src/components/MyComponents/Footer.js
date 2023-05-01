import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "@frontity/components/link";
import OptionApiCall from "../../optionApiCall";

function Footer() {
  const testData = OptionApiCall("options");
  console.log("test_111", testData);
  const {
    footer_cta_sub_title,
    footer_cta_title,
    footer_cta_link,
    copy_right_text,
    contact_email_id,
    socail_links,
    reach_us_tittle,
    footer_menu,
    footer_menu_copy,
  } = testData?.jsonData;
  const SocialShare = [
    {
      Social: <FaFacebookF />,
      link: "https://www.facebook.com/studiosallybcn/",
    },
    {
      Social: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/10494026",
    },
    {
      Social: <FaInstagram />,
      link: "https://www.instagram.com/studiosally_es/",
    },
  ];
  return (
    <>
      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner">
                  <span>{footer_cta_sub_title}</span>
                  <h5>{footer_cta_title}</h5>
                  <a className="rn-button-style--2" href={footer_cta_link?.url}>
                    <span>{footer_cta_link?.title}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right" data-black-overlay="6">
                <div className="row">
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>{footer_menu_copy}</h4>
                      <ul className="ft-link">
                        {footer_menu?.map((val, i) => (
                          <li>
                            <Link link={val?.footer_menu_link}>
                              {val?.footer_menu_title}
                            </Link>
                          </li>
                        ))}
                        {/* <li>
                          <Link link="/about">About</Link>
                        </li>
                        <li>
                          <Link link="/contact">Contacto</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="footer-link">
                      <h4>{reach_us_tittle}</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="mailto:hello@studiosally.com">
                            {contact_email_id}
                          </a>
                        </li>
                      </ul>

                      <div className="social-share-inner">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                          {socail_links?.map((val, i) => (
                            <li key={i}>
                              <a
                                href={`${val?.social_url}`}
                                dangerouslySetInnerHTML={{
                                  __html: val?.social_icon,
                                }}
                              ></a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Widget  */}

                  <div className="col-lg-12">
                    <div className="copyright-text">
                      <p>{copy_right_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
