import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import axios from 'axios'
var stringify = require("json-stringify-safe");

const codeofethics = (props) => {
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

  return (
    <div className="whitepaper-page">
      <Layout title="White paper" />
      <SubHeader marqueeData={marqueeData} />
      {/* <!---------------------- End Hero Section ---------------------> */}
      {/* <!-- ===================== whitepaper  section  ======================== --> */}
      <div className="container-fluid">
        <div className="row whitepaper-container m-auto">
          <div className="col-md-12">
            <div className="whitepaper-heading">
              <h2>Whitepaper</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="whitepaper-download">
              <img src="assets/icons/file-icon.svg" alt="" />
              <h5>Download whitepaper</h5>
              <a href="/assets/YearnCash.pdf" download>
                <img src="assets/icons/download.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default codeofethics;


export async function getServerSideProps() {
 
  let config = {
    headers: {
      "X-CMC_PRO_API_KEY": "fcb17a13-9025-4066-b3a2-f57f08ccdccf",
    },
  };
  let result = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    config
  );
  let coinsData = stringify(result)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      coinsData
    },
  };
}
