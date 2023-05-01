import Header from "../../MyComponents/Header";
import { connect } from "frontity";
import React,{useEffect} from "react";
import { Global, css, HelmetProvider, Head } from "frontity";
import headerCss from "../../../css/header/_header.css";
import mainMenuCss from "../../../css/header/_mainmenu.css";
import animation from "../../../css/_animations.css";
import reset from "../../../css/_reset.css";
import shortCode from "../../../css/_shortCode.css";
import spacing from "../../../css/_spacing.css";
import breadCrump from "../../../css/common/_breadcrump.css";
import button from "../../../css/common/_button.css";
import footer from "../../../css/common/_footer.css";
import paginationCss from "../../../css/common/_pagination.css";
import sectiontitle from "../../../css/common/_section-title.css";
import socialicon from "../../../css/common/_socialicon.css";
import globalCss from "../../../css/global.css";
import darkVersion from "../../../css/template/_dark-version.css";
import aboutsCss from "../../../css/template/_about.css";
import portfolioCssOne from "../../../css/template/_portfolio-details.css";
import preview from "../../../css/template/_preview.css";
import serviceDetails from "../../../css/template/_service-details.css";
import accordion from "../../../css/elements/_accordion.css";
import brand from "../../../css/elements/_brand.css";
import callToAction from "../../../css/elements/_callto-action.css";
import column from "../../../css/elements/_column.css";
import contact from "../../../css/elements/_contact.css";
import counterup from "../../../css/elements/_counterup.css";
import listCss from "../../../css/elements/_list.css";
import portfolioCss from "../../../css/elements/_portfolio.css";
import pricing from "../../../css/elements/_pricing.css";
import progress from "../../../css/elements/_progress.css";
import service from "../../../css/elements/_service.css";
import sliders from "../../../css/elements/_slider.css";
import tab from "../../../css/elements/_tab.css";
import team from "../../../css/elements/_team.css";
import testimonial from "../../../css/elements/_testimonial.css";
import Footer from "../Footer";
import AboutUsBreadCrumb from "../AboutUsPage/AboutUsBreadCrumb";
import PortfolioList from "./PortfolioList";
import ScrollToTop from "react-scroll-to-top";
import { FiChevronUp } from "react-icons/fi";
import slick from "slick-carousel/slick/slick.css";
import slicktheame from "slick-carousel/slick/slick-theme.css";
import PostCall from "../../../PostCall";

const list = [
  {
    image: "image-1",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

const sliderSetting = {
  infinite: true,
  slidesToShow: 3,
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

const PortfolioList2 = [
  {
    image: "image-1",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: " Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: " Getting tickets to the big show",
  },
];

function PortfolioRoot({state,actions}) {
  return (
    <>
      <Global styles={css(animation, reset, shortCode, spacing)} />
      <Global
        styles={css(
          headerCss,
          mainMenuCss,
          breadCrump,
          button,
          footer,
          paginationCss,
          sectiontitle,
          socialicon
        )}
      />

      <Global
        styles={css(
          globalCss,
          darkVersion,
          aboutsCss,
          portfolioCssOne,
          preview,
          serviceDetails
        )}
      />

      <Global
        styles={css(
          socialicon,
          accordion,
          brand,
          callToAction,
          column,
          contact,
          counterup,
          listCss,
          portfolioCss,
          pricing,
          progress,
          service,
          sliders,
          tab,
          team,
          testimonial,
          slick,
          slicktheame
        )}
      />

      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
          integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
          integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className="active-dark">
        <Header />
      </div>
      <AboutUsBreadCrumb title={"Portfolio"} />
      <main className="page-wrapper">
        <div className="portfolio-area ptb--120 bg_color--5">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30">
                    <h2 className="title">All Works</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-left mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 text-center">
                    <a
                      className="rn-button-style--2 btn-solid"
                      href="/portfolio"
                    >
                      <span>View More Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
      <div className="backto-top">
        <ScrollToTop showUnder={400}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      <Footer />
    </>
  );
}

export default connect(PortfolioRoot);
