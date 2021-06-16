import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import axios from "axios";
var stringify = require("json-stringify-safe");

const roadmap = (props) => {
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

  return (
    <div>
      <Layout title="Yearn Cash (YFIC) Road Map" />
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
                      <p>Hobit Listing</p>
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
                      <p>Lbank Listing</p>
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
                        In conversation about a partnership with the
                        U.S.Cannabis industry & Yearn Cash
                      </p>
                    </div>
                  </div>
                </div>
                <div className="containers left white-check">
                  <div className="content">
                    <h2>08</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/bilaxy.svg" alt="" />{" "}
                      <p>Marketing launch before the listing</p>
                    </div>
                  </div>
                </div>
                <div className="containers right white-check">
                  <div className="content">
                    <h2>09</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/dollar.svg" alt="" />
                      <p>Bilaxy Listing</p>
                    </div>
                  </div>
                </div>
                <div className="containers left white-check">
                  <div className="content">
                    <h2>10</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/wallet.svg" alt="" />{" "}
                      <p>Find and conduct stake on partner platform</p>
                    </div>
                  </div>
                </div>
                <div className="containers right white-check">
                  <div className="content">
                    <h2>11</h2>
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
                    <h2>12</h2>
                    <div className="roadmap-image">
                      <img src="assets/icons/wallet.svg" alt="" />{" "}
                      <p>Find and conduct stake on partner platform</p>
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

              {/* Second tree */}
              <div className="timeline-second-tree">
                <h2 className="timeline-second-tree-heading">YEARN WALLET ROAD MAP</h2>
                <div className="timeline">
                  <div className="containers right">
                    <div className="content timeline-completed">
                      <h2>01</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/rocket.svg" alt="" />{" "}
                        <p>Begin working on creation of Wallet and initial layout.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers left">
                    <div className="content timeline-completed">
                      <h2>02</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/habits.svg" alt="" />{" "}
                        <p>
                        Create marketing campaign and YFIC promotional give away for yEARN wallet roll out.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="containers right">
                    <div className="content timeline-completed">
                      <h2>03</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/mobile.svg" alt="" />{" "}
                        <p>Meeting with Chainlink Labs to discuss API integration and smart contract implementation in the marijuana industry.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers left">
                    <div className="content timeline-completed">
                      <h2>04</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/listings.svg" alt="" />{" "}
                        <p>Partner with Roger’s Financial (Marijuana Grower and Cultivator)</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers right">
                    <div className="content timeline-completed">
                      <h2>05</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/real-world.svg" alt="" />{" "}
                        <p>Acquire API key from METRC (seed to sale software) and begin working on completing smart contract integration.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers left">
                    <div className="content timeline-completed">
                      <h2>06</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/partnership.svg" alt="" />{" "}
                        <p>Meeting with ABACA banking intermediate to discuss a possible partnership and future use of yEARN Wallet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers right">
                    <div className="content">
                      <h2>07</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/marketing.svg" alt="" />{" "}
                        <p>July 15th ZED Run Racehorse Giveaway.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers left white-check">
                    <div className="content">
                      <h2>08</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/bilaxy.svg" alt="" />{" "}
                        <p>Deliver Beta version of yEARN Wallet for test pilot.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers right white-check">
                    <div className="content">
                      <h2>09</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/dollar.svg" alt="" />
                        <p>Finalize API integration for Chainlink Labs’ smart contracts.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers left white-check">
                    <div className="content">
                      <h2>10</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/wallet.svg" alt="" />{" "}
                        <p>Roll out final version of yEARN Wallet with 2500 YFIC giveaway.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers right white-check">
                    <div className="content">
                      <h2>11</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/website.svg" alt="" />{" "}
                        <p>
                          Apply for gambling license for crypto casino.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="containers left white-check">
                    <div className="content">
                      <h2>12</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/wallet.svg" alt="" />{" "}
                        <p>yEARN Wallet live on Android and IOS App Store.</p>
                      </div>
                    </div>
                  </div>
                  <div className="containers right white-check">
                    <div className="content">
                      <h2>13</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/website.svg" alt="" />{" "}
                        <p>
                        Implement yEARN Wallet for use of crypto in retail format.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="containers left white-check">
                    <div className="content">
                      <h2>14</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/wallet.svg" alt="" />{" "}
                        <p>RULE THE FUCKING WORLD JK JK HOPEFULLY SOMEONE READS THIS SHIT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second tree */}
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
