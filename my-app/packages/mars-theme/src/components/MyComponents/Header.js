import Logo from "../../assets/images/logosallywh.png";
import React, { useEffect } from "react";
import { Global, css, connect, styled, Head, fr } from "frontity";
import Link from "@frontity/components/link";
import { FiMenu, FiX } from "react-icons/fi";
import ApiCall from "../../ApiCall";
import OptionApiCall from "../../optionApiCall";
function Header({ state }) {
  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  };

  const CLoseMenuTrigger = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  };

  const navigateHandle = (event) => {
    event.preventDefault();
    actions.router.set("/about/");
  };

  const testData = OptionApiCall("options");
  console.log("test_111", testData);
  const { header_logo, header_contact_button, header_menu } =
    testData?.jsonData;

  return (
    <header className={`header-area formobile-menu header--transparent`}>
      <div className="header-wrapper" id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <Link link="/">
              <img src={header_logo?.url} alt="Digital Agency" />
            </Link>
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              {header_menu?.map((val, i) => (
                <li>
                  <Link link={val?.menu_url}>{val?.menu_title}</Link>
                </li>
              ))}
              {/* <li>
                <Link link="/about/">About</Link>
              </li>
              <li>
                <Link link="/service/">Services</Link>
              </li> */}
              <li className="hide-desktop">
                <Link link="/contact/">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header-btn">
            <Link className="rn-btn" link={header_contact_button?.url}>
              {header_contact_button?.title}
            </Link>
          </div>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            {/* //onClick={this.menuTrigger} */}
            <span className="menutrigger text-white" onClick={menuTrigger}>
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            {/* onClick={this.CLoseMenuTrigger} */}
            <span className="closeTrigger" onClick={CLoseMenuTrigger}>
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default connect(Header);
