import React, { useState } from "react";
import HeroMenu from "../components/HeroMenu/HeroMenu";
import Marqueee from "../components/Marquee/Marquee";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import ReactPlayer from "../components/ReactPlayer/ReactPlayer";
var stringify = require("json-stringify-safe");

const Wallet = (props) => {
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));
  return (
    <div>
      <Layout title="Wallet" />
      <div className="wallet-page">
        <section className="hero transparent-hero d-flex flex-column justify-content-end align-items-center">
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
        <section className="about-wallet">
          <div className="container custom-contain">
            <div className="row text-center">
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
                      {/* <img src="assets/images/security.svg" alt="" /> */}
                      <ReactPlayer />
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
                    <img src="assets/images/Beta.JPG" alt="" />
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
        {/* <!---------------------- Timer Section ---------------------> */}
        <section class="timer">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12">
                        <p>Follow us on Telegram Before</p>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        <div class="months">
                            <h5>09</h5>
                            <span>months</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="days">
                            <h5>07</h5>
                            <span>Days</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="hours">
                            <h5>07</h5>
                            <span>Hours</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="minutes">
                            <h5>45</h5>
                            <span>MINUTES</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="seconds">
                            <h5>17</h5>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
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
