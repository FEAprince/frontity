import ApiCall from "../../ApiCall";
import aboutsUs_01 from "../../assets/images/about-1.jpg";
import Titledesc from "./titledesc";

function AboutUs() {
  const apiData = ApiCall("home");
  const headerData = apiData?.jsonData[0]?.acf;
  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="row row--35 align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="thumbnail">
              <img
                className="w-100"
                src={headerData?.section_image?.url}
                alt="About Images"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
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
              <div className="row mt--30 mt_sm--10">
                {headerData?.about_sub_section?.map((item, index) => {
                  return (
                    <Titledesc
                      title={item.about_sub_section_title}
                      description={item.about_sub_section_description}
                    />
                  );
                })}
                {/* <Titledesc
                  title="¿Quienes somos?"
                  description=" Somos una agencia digital enfocada en marketing online y
                    desarrollo web. Vivimos en Barcelona y Madrid y trabajamos
                    con colaboradores y clientes de todo el mundo."
                />

                <Titledesc
                  title="¿Como Somos?"
                  description="Nos adaptamos a las necesidades de nuestros clientes sea
                    cual sea su tamaño, su sector o sus necesidades. Buscamos
                    ofrecer servicios integrales, que aporten una identidad
                    gráfica sólida y que acompañen a la empresa durante años."
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
