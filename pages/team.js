import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import TeamMembers from "../components/Team/TeamMembers";
import SubHeader from "../components/SubHeader/SubHeader";
import axios from 'axios'
var stringify = require("json-stringify-safe");

const team = (props) => {
    const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

  return (
    <div>
      <Layout title="Meet the Yearn Team!" favicon="icons/roadmapone.png"  />
      <div className="team-page">
      <SubHeader marqueeData={marqueeData} />
        {/* <!---------------------- Partners Section ---------------------> */}
        <section className="partners">
            <div className="container custom-contain">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h2>Core Leadership</h2>
                        <div className="main-desc">
                            <p>Yearn Cash seeks to be one of the leading cryptocurrencies created by the people, for the
                                benefit of the people. Our intention is to be adopted for use as a peer-to-peer (P2P)
                                payment system that takes the power away from large financial institutions</p>
                        </div>
                    </div>
                </div>
                <TeamMembers />
            </div>
        </section>
        {/* <!---------------------- End Partners Section ---------------------> */}
    </div>
    </div>
  );
};

export default team;





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
