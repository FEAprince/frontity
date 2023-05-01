import ApiCall from "../../ApiCall";
import serviceImages1 from "../../assets/images/icon-01.png";
import serviceImages2 from "../../assets/images/icon-02.png";
import serviceImage3 from "../../assets/images/icon-03.png";

const serviceList = [
  {
    icon: serviceImages1,
    title: "Comunicación",
    description: "Ayudamos a aumentar la visibilidad de tu marca en internet.",
  },
  {
    icon: serviceImages2,
    title: "Desarrollo WEB",
    description:
      "Creación de páginas y tiendas online con un diseño simple y eficaz.",
  },
  {
    icon: serviceImage3,
    title: "Branding y Diseño",
    description:
      "Nos gusta el diseño simple, conceptual y minimalista que ayuda a comunicar grandes ideas.",
  },
];

function Services() {
  const apidata = ApiCall("home");
  const serviceData = apidata?.jsonData[0]?.acf;
  const serviceLists = serviceData?.hero_banner_services
  return (
    <div className="row">
      {serviceLists?.map((res) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="service service__style--1">
              <div className="icon">
                <img src={res?.service_icon?.url} alt="Digital Agency" />
              </div>
              <div className="content">
                <h4 className="title">{res.service_title}</h4>
                <p dangerouslySetInnerHTML={{__html:res.service_description}}></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
