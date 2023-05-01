import Slider from "react-slick";
import portfolio_01 from "../../assets/images/portfolio-1.jpg";
import portfolio_02 from "../../assets/images/portfolio-2.jpg";
import portfolio_03 from "../../assets/images/portfolio-3.jpg";
import portfolio_04 from "../../assets/images/portfolio-4.jpg";
import portfolio_05 from "../../assets/images/portfolio-5.jpg";
import portfolio_06 from "../../assets/images/portfolio-6.jpg";
import OptionApiCall from "../../optionApiCall";

function Portfolio() {
  const testData = OptionApiCall("options");
  console.log("test_111", testData);
  const { portfolio_section_title,portfolio_section_description,portfolio_listing  } = testData?.jsonData;

  const portfolioDetails = [
    {
      image: "image-1",
      imgUrl: portfolio_01,
      category: "Diseño, Desarrollo Web, Comunicación",
      title: "Mirave",
      url: "https://mirave.es/",
    },
    {
      image: "image-2",
      imgUrl: portfolio_02,
      category: "Diseño, Desarrollo Web, Comunicación",
      title: "E-koala",
      url: "https://e-koala.com/",
    },
    {
      image: "image-3",
      imgUrl: portfolio_03,
      category: "Desarrollo Web",
      title: "My Elder",
      url: "http://myelder.com/",
    },
    {
      image: "image-4",
      imgUrl: portfolio_04,
      category: "Desarrollo Web",
      title: "Mamita",
      url: "https://www.mamitabotanical.com/",
    },
    {
      image: "image-5",
      imgUrl: portfolio_05,
      category: "Diseño, Desarrollo Web, Comunicación",
      title: " Lara Grill",
      url: "http://laragrill.es/",
    },
    {
      image: "image-6",
      imgUrl: portfolio_06,
      category: "Desarrollo Web",
      title: "MSS",
      url: "https://www.mss.es/",
    },
  ];

  const sliderSetting = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>{portfolio_section_title}</h2>
              <p dangerouslySetInnerHTML={{__html:portfolio_section_description}}></p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-slick-activation mt--70 mt_sm--40">
        <Slider {...sliderSetting}>
          {portfolio_listing?.map((res, index) => (
            <div className="portfolio" key={index}>
              <div className="thumbnail-inner">
              <div className={`thumbnail ${res?.portfolio_image_info?.url}`}>
                  <img src={res?.portfolio_image_info?.url} />
                </div>
                <div className={`bg-blr-image ${res?.portfolio_image_info?.url}`}>
                  <img src={res?.portfolio_image_info?.url} />
                </div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{res?.portfolio_category}</p>
                  <h4>
                    <a href="/portfolio-details">{res?.portfolio_title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a
                      className="rn-btn"
                      href={res?.portfolio_link}
                      target="_blank"
                    >
                      {res?.portfolio_link}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Portfolio;
