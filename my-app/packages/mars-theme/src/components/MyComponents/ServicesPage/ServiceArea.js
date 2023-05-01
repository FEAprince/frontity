import { FaLaptopCode, FaPencilAlt } from "react-icons/fa";
import { FiPenTool, FiSmile, FiTv, FiUsers } from "react-icons/fi";
import ApiCall from "../../../ApiCall";

function ServiceArea() {
  const ServiceList = [
    {
      icon: <FiPenTool />,
      title: "Branding",
      description: "Creamos marcas y las cotamos de prersonalidad propia.",
      servicios1: "Diseño de logo y manual de marca",
      servicios2: "Creatividad",
      servicios3: "Packaging",
    },
    {
      icon: <FaLaptopCode />,
      title: "Desarrollo WEB",
      description: "Tu página web es tu ventana al mundo",
      servicios1: "Diseño web y responsive",
      servicios2: "Ecommerce",
      servicios3: "Usabilidad y arquitectura web",
    },
    {
      icon: <FiUsers />,
      title: "Marketing Online",
      description:
        "Te ayudamos a crear tu plan de marketing online para conseguir tus objetivos:.",
      servicios1: "Generación de contenido",
      servicios2: "Email marketing",
      servicios3: "Posicionamiento web SEO",
    },
    {
      icon: <FiSmile />,
      title: "Comunicación",
      description:
        "Te ayudamos a crear tu plan de marketing online para conseguir tus objetivos:.",
      servicios1: "Generación de contenido",
      servicios2: "Email marketing",
      servicios3: "Posicionamiento web SEO",
    },
    {
      icon: <FaPencilAlt />,
      title: "Diseño",
      description:
        "Nos gusta el diseño simple, conceptual y minimalista para comunicar grandes ideas.",
      servicios1: "Diseño a medida",
      servicios2: "Diseño de banners",
      servicios3: "Material promocional",
    },
    {
      icon: <FiTv />,
      title: "Campañas",
      description: "Optimización de palabras clave y publicidad online.",
      servicios1: "Publicidad en redes sociales",
      servicios2: "Adwords",
      servicios3: "Afiliación",
    },
  ];
  const apiData = ApiCall("servicios");
  const headerData = apiData?.jsonData[0]?.acf;
  console.log("headerData:", headerData);
  return (
    <div className="service-area ptb--120 bg_color--5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb--30">
              <h2>{headerData?.service_title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: headerData?.service_description,
                }}
              ></p>
            </div>
          </div>
        </div>
        <div className="row service-one-wrapper">
          {headerData?.service_list_box?.map((val, i) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="service service__style--2">
                <div
                  className="icon"
                  dangerouslySetInnerHTML={{
                    __html: val?.service_list_image,
                  }}
                ></div>
                <div className="content">
                  <h3 className="title">{val?.service_list_title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: val?.service_list_description,
                    }}
                  ></p>
                  <ul>
                    {val?.service_list_points_otr?.map((item, i) => {
                      return <li>{item?.service_list_points_text}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ServiceArea;
