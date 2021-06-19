import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import axios from "axios";
var stringify = require("json-stringify-safe");

const roadmap = (props) => {
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

  return (
    <div>
      <Layout title="Check out our progress and plans for the future!" />
      <div className="roadmap-page">
        <SubHeader marqueeData={marqueeData} />
        {/* <!-- ===================== Road Map Section  ======================== --> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="road-map-banner">
                <h1>Roadmap</h1>
                <p>
                  Yearn Cash seeks to be one of the leading cryptocurrencies
                  created by the people, for the benefit of the people. Our
                  intention is to be adopted for use as a peer-to-peer (P2P)
                  payment system that takes the power away from large financial
                  institutions
                </p>
              </div>
              <div className="timeline">
                <div className="containers right">
                  <div className="content timeline-completed">
                    <h2>01</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/rocket.svg" alt="" />{" "}
                      <p>Launch of V1 of Truefi Protocol</p>
                    </div>
                  </div>
                </div>
                <div className="containers left">
                  <div className="content timeline-completed">
                    <h2>02</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/habits.svg" alt="" />{" "}
                      <p>
                        Website upgrades, Changes and upgrades to the project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="containers right">
                  <div className="content timeline-completed">
                    <h2>03</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/mobile.svg" alt="" />{" "}
                      <p>Hotbit Listing</p>
                    </div>
                  </div>
                </div>
                <div className="containers left">
                  <div className="content timeline-completed">
                    <h2>04</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/listings.svg" alt="" />{" "}
                      <p>Mobile app launch Yearn cash product</p>
                    </div>
                  </div>
                </div>
                <div className="containers right">
                  <div className="content timeline-completed">
                    <h2>05</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/real-world.svg" alt="" />{" "}
                      <p>Added 16,000 YFIC to team multisig wallet</p>
                    </div>
                  </div>
                </div>
                <div className="containers left">
                  <div className="content timeline-completed">
                    <h2>06</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/partnership.svg" alt="" />{" "}
                      <p>
                        Solve Real-World problem and bring crypto & the industry
                        closer in the real world
                      </p>
                    </div>
                  </div>
                </div>
                <div className="containers right">
                  <div className="content timeline-completed">
                    <h2>07</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/marketing.svg" alt="" />{" "}
                      <p>
                      Partnered with U.S. Cannabis Industry and Rogers Financial
                      </p>
                    </div>
                  </div>
                </div>
                <div className="containers left white-check">
                  <div className="content">
                    <h2>08</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/bilaxy.svg" alt="" />{" "}
                      <p>Pre marketing campaign for potential exchange listing</p>
                    </div>
                  </div>
                </div>
                <div className="containers right white-check">
                  <div className="content">
                    <h2>09</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/dollar.svg" alt="" />
                      <p>WhiteBit or premium exchange listing</p>
                    </div>
                  </div>
                </div>
                <div className="containers left white-check">
                  <div className="content">
                    <h2>10</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/wallet.svg" alt="" />{" "}
                      <p>Implement YFIC for use on NFT platform as a payment option</p>
                    </div>
                  </div>
                </div>
                <div className="containers right white-check">
                  <div className="content">
                    <h2>11</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/website.svg" alt="" />{" "}
                      <p>
                      Created payment option for YFIC on crypto casino and use as a reward token in yEARN Wallet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="containers left white-check">
                  <div className="content">
                    <h2>12</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/wallet.svg" alt="" />{" "}
                      <p>YFIC to be used as an option for settling payments in the Marijuana Industry</p>
                    </div>
                  </div>
                </div>
                <div className="containers right white-check">
                  <div className="content">
                    <h2>13</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/website.svg" alt="" />{" "}
                      <p>
                        Create a partnership with Ledger to stake cold wallet
                      </p>
                    </div>
                  </div>
                </div>
                <div className="containers left white-check">
                  <div className="content">
                    <h2>14</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/wallet.svg" alt="" />{" "}
                      <p>Find and conduct stake on partner platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ===================== End Road Map Section  ======================== --> */}
      </div>
    </div>
  );
};

export default roadmap;

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
  let coinsData = stringify(result);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      coinsData,
    },
  };
}
