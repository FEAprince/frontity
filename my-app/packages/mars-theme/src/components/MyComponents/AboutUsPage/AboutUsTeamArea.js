import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img from "../../../assets/images/wally.jpg";
import img2 from "../../../assets/images/mj.jpg";
import img3 from "../../../assets/images/angela.jpg";
import img4 from "../../../assets/images/emilio.jpg";
import img5 from "../../../assets/images/daniss.jpg";
import img6 from "../../../assets/images/palumbo.jpg";
import ApiCall from "../../../ApiCall";
function AboutUsTeamArea() {
  const apiData = ApiCall("about");
  const headerData = apiData?.jsonData[0]?.acf;
  return (
    <div className="rn-team-area bg_color--1 ptb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title service-style--3 text-center mb--25">
              <h5 className="title">{headerData?.our_team_title}</h5>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Start Single Team  */}
          {headerData?.team_members_otr?.map((val, i) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={val?.team_members_image?.url}
                      alt="Equipo Studio Sally"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">{val?.team_members_name}</h4>
                    <p className="designation">{val?.team_members_position}</p>
                  </div>
                  <ul className="social-icon">
                    {val?.team_social_media_otr?.map((item, i) => {
                      return (
                        <li>
                          <a
                            href={item?.team_social_media_url}
                            dangerouslySetInnerHTML={{
                              __html: item?.team_social_media_image,
                            }}
                          ></a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default AboutUsTeamArea;
