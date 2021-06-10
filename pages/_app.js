import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import dynamic from "next/dynamic";

import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import { Fragment, useState } from "react";
// import DarkModeToggle from "../components/DarkMode/DarkmodeToggle";

const DynamicComponent = dynamic(() => import("../styles/globals.css"));

function MyApp({ Component, pageProps }) {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      {/* <DarkModeToggle /> */}
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
