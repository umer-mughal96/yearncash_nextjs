import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import dynamic from "next/dynamic";

import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import { Fragment, useState } from "react";
// import DarkModeToggle from "../components/DarkMode/DarkmodeToggle";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter()
  console.log("🚀 ~ file: _app.js ~ line 16 ~ MyApp ~ router", router)
  return (
    <Fragment>
      {/* <DarkModeToggle /> */}
      <Layout>
        <Header />
        <Component {...pageProps} />
        {router.pathname == '/' && null }
        
      </Layout>
    </Fragment>
  );
}

export default MyApp;
