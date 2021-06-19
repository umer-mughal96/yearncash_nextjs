import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import { Fragment, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [darkMode , setDarkMode] = useState()



  const handleParentDarkMode = (value) => {
    setDarkMode(value)
  }
  return (
    <Fragment>
      <Layout>
        <Header handleParentDarkMode={handleParentDarkMode} />
        <Component {...pageProps} />
        <Footer darkMode={darkMode} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
