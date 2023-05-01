import { Global, css,Head,connect,actions} from "frontity";
import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top" 
import { FiChevronUp } from "react-icons/fi";
import Header from "./MyComponents/Header";
import Banner from "./MyComponents/Banner";
import AboutUs from "./MyComponents/AboutUs";
import ServiceTwo from "./MyComponents/ServiceTwo";
import Portfolio from "./MyComponents/Portfolio";
import Footer from "./MyComponents/Footer";
// ** Css Part **//

// *** header //
import headerCss from "../css/header/_header.css";
import mainMenuCss from "../css/header/_mainmenu.css";
// header *** //

// *** Comman //
import breadCrump from "../css/common/_breadcrump.css";
import button from "../css/common/_button.css";
import footer from "../css/common/_footer.css";
import paginationCss from "../css/common/_pagination.css";
import sectiontitle from "../css/common/_section-title.css";
import socialicon from "../css/common/_socialicon.css";
// Comman *** //

// *** elements //
import fourZerofour from "../css/elements/_404.css";
import accordion from "../css/elements/_accordion.css";
import brand from "../css/elements/_brand.css";
import callToAction from "../css/elements/_callto-action.css";
import column from "../css/elements/_column.css";
import contact from "../css/elements/_contact.css";
import counterup from "../css/elements/_counterup.css";
import listCss from "../css/elements/_list.css";
import portfolioCss from "../css/elements/_portfolio.css";
import pricing from "../css/elements/_pricing.css";
import progress from "../css/elements/_progress.css";
import service from "../css/elements/_service.css";
import sliders from "../css/elements/_slider.css";
import tab from "../css/elements/_tab.css";
import team from "../css/elements/_team.css";
import testimonial from "../css/elements/_testimonial.css";
// elements *** //

// *** template //
import aboutsCss from "../css/template/_about.css";
import darkVersion from "../css/template/_dark-version.css";
import portfolioCssOne from "../css/template/_portfolio-details.css";
import preview from "../css/template/_preview.css";
import serviceDetails from "../css/template/_service-details.css";
// template *** //

// *** global //
import globalCss from "../css/global.css";
// global ***//

// *** default //
import animation from "../css/_animations.css";
import reset from "../css/_reset.css";
import shortCode from "../css/_shortcode.css";
import spacing from "../css/_spacing.css";
import Brands from "./MyComponents/Brands";
// default *** //
import slick from "slick-carousel/slick/slick.css";
import slicktheame from "slick-carousel/slick/slick-theme.css";
import ApiCall from "../ApiCall";

const Roots = ({state,libraries}) => {
  const data = state.source.get(state.router.link);
  console.log("1",state.router.link);
  const page = state.source[data.type];
  const dataS = Object.values(page);
  const finalData = dataS.map((res)=>{
      return res;
  });

  console.log("finalData",finalData);

  console.log("link",state.router.link);
  const pageData = state.source.data[state.router.link]
  
  const apiData = ApiCall("home");

  return (
    <>
      <Global styles={css(animation, reset, shortCode, spacing,)} />
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
          mainMenuCss,
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
        {console.log("1_finalData", apiData?.jsonData[0]?.acf)}
        <Header />
        <div className="slider-wrapper">
          <Banner />
        </div>
        {/* Start About Area */}
        <div className="about-area about-position-top pb--120 bg_color--1">
          <AboutUs />
        </div>
        {/* End About Area */}

        {/* Start Service Area  */}
        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner mb--55">
            <Portfolio />
          </div>
        </div>
        {/* End Portfolio Area */}

        <div className="rn-brand-area brand-separation bg_color--5 pb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Brands />
              </div>
            </div>
          </div>
        </div>

        <div className="backto-top">
          <ScrollToTop showUnder={400}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        <Footer/>
      </div>
      </>
  );
};

export default connect(Roots);
