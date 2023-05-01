import { Global, css, connect, styled, Head } from "frontity";
import React,{useEffect} from "react"
import AboutUsPageRoot from "./AboutUsPage/AboutUsRoot";
import Switch from "@frontity/components/switch";
import Roots from "../Roots";
import ServicesRoot from "./ServicesPage/ServicesRoot";
import ContactRoot from "./ContactPage/ContactRoot";
import PortfolioRoot from "./PortfolioPage/PortfolioRoot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const customTheame = ({ state,actions }) => {
  const routes = state.router.link;

  // useEffect(async() => {
  //   console.log("1______----",await actions.source.fetch("/portfolio"));
  // }, [])
  
  return (
    <Switch>
      <Roots when={routes == "/"} />
      <ServicesRoot when={routes == "/service/"} />
      <ContactRoot when={routes == "/contact/"} />
      <AboutUsPageRoot when={routes == "/about/"} />
      <PortfolioRoot when={routes == "/portfolio/"} />
    </Switch>
  );
};

export default connect(customTheame);
