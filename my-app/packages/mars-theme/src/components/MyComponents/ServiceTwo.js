import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import ApiCall from "../../ApiCall";

function ServiceTwo() {
  const ServiceList = [
    {
      icon: <FiCast />,
      title: "Branding y Diseño",
      description:
        "Si necesitas una imagen para tu negocio podemos ayudarte.  Somos especialistas en branding y en rediseño y modernización de marca. Diseñamos logotipos para usar en todos los soportes y le damos a tu negocio la imagen seria y profesional que necesitas.",
    },
    {
      icon: <FiLayers />,
      title: "Diseño y Mantenimiento Web",
      description:
        "¿Necesitas una web para tu empresa o comercio? ¿Buscas un buen diseño web y un desarrollo que puedas manejar fácilmente? Estudiamos tus necesidades y objetivos para ofrecerte la web que necesitas para hacer crecer tu negocio.",
    },
    {
      icon: <FiUsers />,
      title: "Marketing online",
      description:
        "Conseguir mejorar el posicionamiento de tu página web es uno de los aspectos básicos para crecer. Diseñamos y elaboramos acciones de SEO, campañas SEM de publicidad en internet y mantenimiento de blog y redes sociales.",
    },
    {
      icon: <FiMonitor />,
      title: "Comunicación",
      description:
        "Te ayudamos a crear tu plan de comunicación en redes sociales.",
    },
  ];
  let title = "Servicios";
  let description =
    "Somos una agencia de marketing con servicio completo.  Nos gusta mantener relaciones saludables y felices con nuestros clientes.";
  const apiData = ApiCall("home");
  const headerData = apiData?.jsonData[0]?.acf;
  console.log("headerData:", headerData);
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
            <h2 className="title">{headerData?.services_section_title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: headerData?.services_section_description,
              }}
            ></div>
            <div className="service-btn">
              <a className=" btn-transparent rn-btn-dark" href="/servicios">
                <span className="text">
                  {headerData?.services_section_link?.title}
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12 mt_md--50">
          <div className="row service-one-wrapper">
            {headerData?.services_list?.map((val, i) => (
              <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                <div className="service service__style--2">
                  <div
                    className="icon"
                    dangerouslySetInnerHTML={{ __html: val.services_icon }}
                  ></div>
                  <div className="content">
                    <h3 className="title">{val.service_title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: val.service_description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceTwo;
