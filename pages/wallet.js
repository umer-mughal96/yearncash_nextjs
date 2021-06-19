import React, { useState } from "react";
import HeroMenu from "../components/HeroMenu/HeroMenu";
import Marqueee from "../components/Marquee/Marquee";
import dynamic from 'next/dynamic'
import Layout from "../components/Layout/Layout";
import axios from "axios";
import ReactPlayer from "../components/ReactPlayer/ReactPlayer";

// import Countdownn from '../components/Countdwon/Main'




const Countdownn = dynamic(()=> import("../components/Countdwon/Main"), { ssr: false });

var stringify = require("json-stringify-safe");

const Wallet = (props) => {
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));
  return (
    <div>
      <Layout title="Introduction to yEARN Wallet Your One Stop Shop for Safely Storing, Staking, Swapping and even play Games to win crypto! " />
      <div className="wallet-page">
        <section className="hero transparent-hero d-flex flex-column justify-content-end align-items-center pb-0">
          <div className="container custom-contain wallet-hero-content">
            <div className="row">
              <Marqueee marqueeData={marqueeData} />
              <HeroMenu />
            </div>
            <div className="row">
              <div className="col-md-6">
                {/* <div className="hero-content">
                  <h1>yEARN Wallet</h1>
                  <p>
                    Your non stop solution to safely store and EARN crypto!
                    EARN, STAKE, SWAP, TRANSFER, And even play GAMES to win
                    Crypto! Enjoy $0 transfer fees between yEARN wallet users!
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!---------------------- End Hero Section ---------------------> */}
        {/* <!---------------------- About Wallet Section ---------------------> */}
        <section className="about-wallet pt-0">
          <div className="container custom-contain">

            {/* <div className="row text-center">
              <div className="col-md-12">
                <h2>yEARN Wallet</h2>
                <div className="main-desc">
                  <p>
                    First and foremost, our aim is to be your one stop mobile
                    solution for safely storing and EARNing Cryptocurrency. In
                    our mobile application, users can easily EARN, Stake, Swap,
                    Transfer, and even play Games to win Crypto! Users also
                    enjoy $0 tansfer fees between yEARN Wallet accounts.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="container custom-contain">
                <div className="row wallet-content-row">
                  <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-md-1">
                    <div className="about-illustration-wrap ">
                      <img src="assets/images/video.gif" alt="" />
                      {/* <ReactPlayer /> */}
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 order-md-2 order-1">
                    <div className="wallet-desc wallet-left-content">
                      <h2>yEARN Wallet</h2>
                      <p>
                      First and foremost, our aim is to be your one stop mobile
                      solution for safely storing and EARNing Cryptocurrency. In
                      our mobile application, users can easily EARN, Stake, Swap,
                      Transfer, and even play Games to win Crypto! Users also
                      enjoy $0 tansfer fees between yEARN Wallet accounts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            <div className="about-wallet">
              <div className="container custom-contain">
                <div className="row wallet-content-row">
                  <div className="col-md-6">
                    <div className="wallet-desc wallet-right-content">
                      <h2>Security</h2>
                      <p>
                        The Safety, Protection and Security of our users assets
                        and data is the foundation of which our mobile
                        cryptocurrency wallet application was developed. Our
                        wallet is equipped with Two-Factor Authentication which
                        is used to protect users accounts from unauthorized
                        access. Combined with Face Recognition technology and
                        further KYC features, yEARN Wallet aims to deliver one
                        of the most secure mobile cryptocurrency wallet's on the
                        market.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-illustration-wrap">
                      <img src="assets/images/Security-img.png" alt="" />
                      {/* <ReactPlayer /> */}
                    </div>
                  </div>
                </div>

                <div className="row wallet-content-row">
                  <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-md-1">
                    <div className="about-illustration-wrap ">
                      <img src="assets/images/RealWorldSolutions.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 order-md-2 order-1">
                    <div className="wallet-desc wallet-left-content">
                      <h2>Real World Solutions</h2>
                      <p>
                        Far from just another Mobile Cryptocurrency Wallet
                        Application to store, stake, swap, etc. We are taking it
                        to a whole new level by incorporating a
                        Blockchain-Enabled Internet of Things (IOT) Platform
                        specifically designed for the End-to-End Industrial
                        Supply Chain to improve the transparency, safety,
                        security, traceability, and throughput. We accomplish
                        this through a two-layer blockchain design, proof of
                        authority based smart contracts integrated through
                        ChainLink's Oracles and consensus design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row wallet-content-row">
                <div className="col-md-6">
                  <div className="wallet-desc wallet-right-content">
                    <h2>Private Ecosystem</h2>
                    <p>
                      yEARN Wallet also allows the user to create what’s best
                      described as their own private financial ecosystem. Users
                      can easily add friends / vendors to their network allowing
                      users to securely, swiftly and privately conduct payment
                      transactions via cryptocurrency.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-illustration-wrap">
                    <img src="assets/images/PrivateEcosystem.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="row wallet-content-row">
                <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-md-1">
                  <div className="about-illustration-wrap ">
                    <img src="assets/images/1.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 order-md-2 order-1">
                  <div className="wallet-desc wallet-left-content">
                    <h2>YearnCash (YFIC) Tokenization</h2>
                    <p>
                      yEARN Wallet has partnered with a new p2p ERC-20 Token,
                      YearnCash (YFIC), to power the Wallet’s Crypto Games
                      platform and will also be the means which users EARN their
                      rewards and referrals. Recently, YFIC passed Solidity
                      Token Audit and the team owns 75% of thei 35,000 total
                      supply! One of our ultimate goals for YFIC is for it to
                      become the means of transacting between consumers and
                      retailers for products across all industries. With smart
                      contracts built in and a committed, experienced team
                      behind them, YFIC was the clear choice to be yEARN
                      Wallet's native utility token!
                    </p>
                  </div>
                </div>
              </div>

              <div className="row wallet-content-row">
                <div className="col-md-6">
                  <div className="wallet-desc wallet-right-content">
                    <h2>yEARN Wallet Uses <span>Provably Fair Gaming Algorithm</span></h2>
                    <p>
                      Provably fair gaming is one of the newest innovations in
                      the online gambling world. Many players around the world
                      don’t fully understand what it can offer. Best described
                      as an algorithm which is used to analyze and verify fair
                      play. Without getting too deep into the math behind the
                      software, a provably fair casino game will carry out a few
                      steps in order to show players it is a fair game. With so
                      many cheaters in the online gambling arena, players should
                      at least give themselves the best chance to win by using
                      Provably Fair platforms like yEARN Wallet.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-illustration-wrap">
                    <img src="assets/images/WalletProvably.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="row wallet-content-row">
                <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-md-1">
                  <div className="about-illustration-wrap about-illustration-wrap-last">
                    <img src="assets/images/Beta.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 order-md-2 order-1">
                  <div className="wallet-desc wallet-left-content">
                    <h2>
                      Follow Our Telegram Channel{" "}
                      <span style={{ color: "red" }}>By July 15th</span> To Join
                      The Exclusive Beta Test! t.me/yearn_wallet{" "}
                    </h2>
                    <p>
                      We value our strong & intelligent community. That's why
                      those who join our Telegram Channel on or before <span style={{ color: "red", fontWeight:800 }}>July,15th </span> 
                      will be included in the Beta Test. We are very excited
                      about having our community involved in helping us make the
                      final touches before going live in the Android and iOS App
                      Stores! Stay tuned in our social media accounts as we will
                      have further announcements coming!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!---------------------- Partners Section ---------------------> */}
      <section className="partners">
        <div className="container custom-contain">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>Partners</h2>
              <div className="mt-5 comapany-logos">
                {/* <p>
                  Projects that launch through YFIC will have the opportunity to
                  pitch their project to our KOL network. Through our private
                  Telegram channel, we aim to streamline Marketing, <br />
                  Advisory and Strategic Partnership connections between project
                  leaders and well known KOLs within the DeFi community. Use of
                  our KOL group is without obligation, but highly recommended.
                </p> */}
                <a href="https://dancannabis.com/">
                <img src="assets/images/team5.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="assets/images/chainlinkLabsLogo.png" alt="" />
                </a>
                <a href="https://dancannabis.com/">
                  <img src="assets/images/chainlinkLabsLogo2.JPG" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="OwlCarousel-wrapper">{/* <MySlider /> */}</div>
        </div>
      </section>
      {/* <!---------------------- End Partners Section ---------------------> */}
        {/* <!---------------------- Timer Section ---------------------> */}
        <section class="timer">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12">
                        <p>Follow us on Telegram Before</p>
                    </div>
                </div>
                
                    <Countdownn/>
                
                <div class="row text-center">
                    <div class="col-md-12 pt-4">
                        <i class="far fa-chevron-double-down"></i>
                        <form action="">
                            {/* <!-- <input type="text" class="w-100"> --> */}
                            {/* <!-- <div class="form-check pt-4">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1"><span>I agree with the </span> Privacy Policy</label>
                            </div> --> */}
                            <div class="btn-wrap pt-4">
                                <button class="custom-btn">Telegram</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!---------------------- End Timer Section ---------------------> */}
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
                        <p>Meeting with a banking intermediate to discuss a possible integration into invoicing software of yEARN Wallet.</p>
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
                        <p>Deliver Beta version of yEARN Wallet to our Telegram Followers.</p>
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
                        <p>Roll out final version of yEARN Wallet with 4000 YFIC giveaway.</p>
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
                        <p>yEARN Wallet goes live on Android and IOS App Store.</p>
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
                  {/* <div className="containers left white-check">
                    <div className="content">
                      <h2>14</h2>
                      <div className="roadmap-image">
                        <img src="assets/icons/wallet.svg" alt="" />{" "}
                        <p>RULE THE FUCKING WORLD JK JK HOPEFULLY SOMEONE READS THIS SHIT</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* Second tree */}
        {/* <!---------------------- End About Wallet Section ---------------------> */}
      </div>
    </div>
  );
};

export default Wallet;

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
