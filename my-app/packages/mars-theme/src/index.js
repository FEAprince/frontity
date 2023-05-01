// import Theme from "./components";
// import image from "@frontity/html2react/processors/image";
// import iframe from "@frontity/html2react/processors/iframe";
// import link from "@frontity/html2react/processors/link";

import AboutUsPageRoot from "./components/MyComponents/AboutUsPage/AboutUsRoot";
import ContactRoot from "./components/MyComponents/ContactPage/ContactRoot";
import CustomTheame from "./components/MyComponents/CustomTheame";
import ServicesRoot from "./components/MyComponents/ServicesPage/ServicesRoot";
import Roots from "./components/Roots";

// const marsTheme = {
//   name: "@frontity/mars-theme",
//   roots: {
//     /**
//      * In Frontity, any package can add React components to the site.
//      * We use roots for that, scoped to the `theme` namespace.
//      */
//     theme: Theme,
//   },
//   state: {
//     /**
//      * State is where the packages store their default settings and other
//      * relevant state. It is scoped to the `theme` namespace.
//      */
//     theme: {
//       autoPrefetch: "in-view",
//       menu: [],
//       isMobileMenuOpen: false,
//       featured: {
//         showOnList: false,
//         showOnPost: false,
//       },
//     },
//   },

//   /**
//    * Actions are functions that modify the state or deal with other parts of
//    * Frontity like libraries.
//    */
//   actions: {
//     theme: {
//       toggleMobileMenu: ({ state }) => {
//         state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
//       },
//       closeMobileMenu: ({ state }) => {
//         state.theme.isMobileMenuOpen = false;
//       },
//     },
//   },
//   libraries: {
//     html2react: {
//       /**
//        * Add a processor to `html2react` so it processes the `<img>` tags
//        * and internal link inside the content HTML.
//        * You can add your own processors too.
//        */
//       processors: [image, iframe, link],
//     },
//   },
// };

// export default marsTheme;

// Roots For main Page
// AboutUsPageRoot For About Page
// ServicesRoot For Service Page


const myapp = {
  name: "myapp",
  roots: {
    theme: CustomTheame,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
};

export default myapp;
