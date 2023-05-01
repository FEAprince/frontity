import ApiCall from "../../../ApiCall";
import Img from "../../../assets/images/about-3.jpg";

function AboutUsShortAbout() {
  let title = "About";
  let description =
    "Somos una agencia de marketing online y desarrollo web especializada en mejorar tu presencia online con el objetivo de ayudarte a captar más clientes";
  const apiData = ApiCall("about");
  const headerData = apiData?.jsonData[0]?.acf;
  console.log("headerData:", headerData);
  return (
    <div className="rn-about-area ptb--120 bg_color--1">
      <div className="rn-about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5 ">
              <div className="thumbnail">
                <img
                  className="w-100"
                  src={headerData?.section_image?.url}
                  alt="About Images"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title">{headerData?.section_title}</h2>
                  <p
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: headerData?.section_description,
                    }}
                  ></p>
                </div>
                <div className="row mt--30">
                  {headerData?.about_sub_section.map((val, i) => {
                    return (
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">
                            {val?.about_sub_section_title}
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: val?.about_sub_section_description,
                            }}
                          ></p>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">¿Como Somos?</h3>
                      <p>
                        Nos adaptamos a las necesidades de nuestros clientes sea
                        cual sea su tamaño, su sector o sus necesidades.
                        Buscamos ofrecer servicios integrales, que aporten una
                        identidad gráfica sólida y que acompañen a la empresa
                        durante años.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUsShortAbout;
