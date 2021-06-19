import axios from "axios";
import React, { useState } from "react";
import ProgressBar from "../components/CircularProgress/ProgressBar";
import HomeSubHeader from "../components/HomeSubHeader/HomeSubHeader";
import Layout from "../components/Layout/Layout";
import Model from "../components/Model/Model";

var stringify = require("json-stringify-safe");


export default function Home(props) {
  const [yfic, setYfic] = useState(JSON.parse(props.data));
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

  return (
    <div>
      <Layout title="Yearn Cash + yEARN Wallet offer cryptocurrency solutions to businesses. Users will find Blockchain Games, Crypto-Casino, Staking, Swapping, Rewards, Referrals and more!" />
      <HomeSubHeader marqueeData={marqueeData} />
      {/* <!---------------------- YearCash Chart Section ---------------------> */}
      <section className="yearcash-chart">
        <div className="container custom-contain">
          <div className="row yearcash-stat stat-header">
            <div className="col-md-6 col">
              <div className="avatar-text-wrapper">
                <div className="stat-avatar">
                  {/* <img src={yfic && yfic?.data?.meta.logo_url} alt="" /> */}
                  <img src="assets/images/team5.jpg" alt="" />
                </div>
                <h2>
                  YearnCash <span className="currency">(YFIC)</span>
                </h2>
              </div>
              <div className="currency-desc">
                <span className="currency">YFIC/USD</span>
              </div>
            </div>
            <div className="col-md-6 col">
              <div className="row m-0 p-0">
                <div className="col-6 yearcash-chart-price">
                  <span>Price</span>
                  <div className="rank">
                    <h2>
                      ${yfic && yfic?.data?.meta.price[0]}
                      {yfic && yfic?.data?.meta.price[1]}
                      {yfic && yfic?.data?.meta.price[2]}
                      {yfic && yfic?.data?.meta.price[3]}
                    </h2>
                  </div>
                </div>
                <div className="col-6 yearcash-chart-Rank">
                  <span>Rank</span>
                  <div className="rank">
                    <h2>#{yfic && yfic?.data?.meta.rank}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row yearcash-stat">
            <div className="col">
              <div className="week">
                <span>Week</span>
                <div className="change">
                  {yfic &&
                  yfic?.data?.week.price_change?.toString(10).split("")[0] ==
                    "-" ? (
                    <span className="change-down">
                      {" "}
                      {`${yfic && yfic?.data?.week.price_change[0]}${
                        yfic && yfic?.data?.week.price_change[1]
                      }${yfic && yfic?.data?.week.price_change[2]}${
                        yfic && yfic?.data?.week.price_change[3]
                      }${yfic && yfic?.data?.week.price_change[4]}`}
                    </span>
                  ) : (
                    <span className="change-up">
                      {" "}
                      {`${yfic && yfic?.data?.week.price_change[0]}${
                        yfic && yfic?.data?.week.price_change[1]
                      }${yfic && yfic?.data?.week.price_change[2]}${
                        yfic && yfic?.data?.week.price_change[3]
                      }${yfic && yfic?.data?.week.price_change[4]}`}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="month">
                <span>Month</span>
                <div className="change">
                  {yfic &&
                  yfic?.data?.month.price_change?.toString(10).split("")[0] ==
                    "-" ? (
                    <span className="change-down">
                      {" "}
                      {`${yfic && yfic?.data?.month.price_change[0]}${
                        yfic && yfic?.data?.month.price_change[1]
                      }${yfic && yfic?.data?.month.price_change[2]}`}
                    </span>
                  ) : (
                    <span className="change-up">
                      {" "}
                      {`${yfic && yfic?.data?.month.price_change[0]}${
                        yfic && yfic?.data?.month.price_change[1]
                      }${yfic && yfic?.data?.month.price_change[2]}`}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="year">
                <span>Year</span>
                <div className="change">
                  {yfic &&
                  yfic?.data?.year.price_change?.toString(10).split("")[0] ==
                    "-" ? (
                    <span className="change-down">
                      {" "}
                      {`${yfic && yfic?.data?.year.price_change[0]}${
                        yfic && yfic?.data?.year.price_change[1]
                      }${yfic && yfic?.data?.year.price_change[2]}`}
                    </span>
                  ) : (
                    <span className="change-up">
                      {" "}
                      {`${yfic && yfic?.data?.year.price_change[0]}${
                        yfic && yfic?.data?.year.price_change[1]
                      }${yfic && yfic?.data?.year.price_change[2]}`}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="transp-vol">
                <span>Transp. Vol</span>
                <div className="change">
                  <span className="">
                    {yfic && yfic?.data?.year.volume_transparency_grade}
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="Volume">
                <span>Volume</span>
                <div className="change">
                  <span>$13.4K</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="ath">
                <span>ATH</span>
                <div className="change">
                  <span>2%</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="market-cap">
                <span>Market Cap</span>
                <div className="change">
                  <span>${yfic && yfic?.data?.meta.market_cap}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <LineChart/> */}
      {/* <!---------------------- End YearCash Char Section ---------------------> */}

      {/* <!---------------------- About Section ---------------------> */}
      <section className="about-us pt-0">
        <div className="container custom-contain">
          <div className="row second-row">
            <div className="col-md-6">
              <div className="about-illustration-wrap">
                <img src="assets/images/image1.png" alt="" />
              </div>
            </div>
            <div className="col-md-6 second-para-wrapper image-with-text-first-block">
              Yearn Cash seeks to be the cryptocurrency by the people and for
              the people. Our intention is to be adopted for use as a peer-to
              peer (P2P) payment system, which gives the power back to the
              people as well as solves real world problems that are faced daily.
              Yearn Cash is an ERC-20 Token, which are blockchain-based assets
              that have value and can be received and sent. ERC-20 tokens reside
              on the Ethereum blockchain. Another key benefit of Yearn Cash is
              that it uses the latest technological advances such as Defi and is
              completely open to integration of future industry developments,
              such as sharding and quantic tech amongst other future
              developments.
              {/* <h2>What is YFIC?</h2>
              <p>
                YFIC is an automated full-service Initial DEX Offering Launchpad
                with the goal of making a safer space for investors.
              </p>
              <p>
                Besides offering the option to create an IDO, creators will also
                have operability to lock token allocations in two different
                ways:
              </p>
              <p>
                {" "}
                Time Vault: Where tokens locked will be released after the set
                time has passed.
              </p>
              <p>
                {" "}
                Interval Vault: Where a set percentage of tokens will be
                unlocked after a set time period has passed.
              </p>
              <p>
                After a successful presale, a trading pair will be automatically
                created on Uniswap or Pancakeswap (future chains to be
                integrated). Creators can choose to either burn or lock the
                Liquidity tokens retrieved as a result of the trade pair set-up.
              </p> */}
            </div>
          </div>
          <div className="row second-row">
            <div className="col-md-6 second-para-wrapper order-md-1 order-2 ">
              Far from just another mobile cryptocurrency wallet application.
              Through our underlying technology and partnerships, yEARN Wallet
              will enable businesses in under-banked, highly regulated
              industry’s to break free from the burdens that prevent them from
              access to standard banking products.  Yearn Cash is a P2P - ERC20
              token created with the intention of giving the power back to the
              people. As the native token in the wallet, users can be paid
              rewards and referrals in Yearn Cash. YFIC will also be used to
              power the cryptocurrency casino / sportsbook features in the
              wallet. Through our unique partnership positioning, we’ll even
              have the ability to implement Yearn Cash as a means of transacting
              on the retail level.
              {/* <div className="aboutus-second-para">
                <p>
                  When an IDO is listed on our dashboard, all settings are
                  transparent and visible so investors can be certain that
                  everything set within the IDO form will be executed
                  accordingly.
                </p>
                <p>
                  {" "}
                  IDO Listings are autonomously deployed via our smart contract
                  to ensure security for clients as well as investors. We hold
                  security and transparency in high regards.
                </p>
              </div> */}
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="about-illustration-wrap ">
                <img src="assets/images/seven.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- End About Section ---------------------> */}
      {/* <!---------------------- Tokken Metrics Section ---------------------> */}
      <section className="tokken-metrics">
        <div className="container custom-contain">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>Token Metrics</h2>
            </div>
          </div>
          <div className="row progress-bars-row">
            <div className="col-md-3">
              <div className="CircularProgress">
                <ProgressBar percentage={100} isPercentage={false} />
                <div class="progress-name text-center">
                  <h5>Max Supply</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="CircularProgress">
                <ProgressBar percentage={20} isPercentage={true} />
                <div class="progress-name text-center">
                  <h5>HotBit</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="CircularProgress">
                <ProgressBar percentage={10} isPercentage={true} />
                <div class="progress-name text-center">
                  <h5>Uniswap</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="CircularProgress">
                <ProgressBar percentage={70} isPercentage={true} />
                <div class="progress-name text-center">
                  <h5>Team </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- End Tokken Metrics Section ---------------------> */}
      {/* <!---------------------- Allocations Section ---------------------> */}
      <section className="allocation">
        <div className="container custom-contain">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="allocation-content">
                <h2>Project Highlights</h2>
                <div className="Allocations-content">
                  {/* <p>
                    For community-based efforts, Multisig wallets for DAOs and
                    DeFi projects are often implemented as 6 of 9 wallets, where
                    6 of 9 community wallet signers must agree to sign a
                    transaction before a Smart Contract can be implemented.
                  </p> */}
                  {/* <img src="assets/images/Allocations2.jpg" alt="" /> */}
                  <div className="row Project-Highlights-wrapper">
                    <div className="col-12">
                      <div className="Project-Highlights-content-box">
                        <div className="Project-Highlights-header">
                          <div className="Project-icon">
                            <img
                              src="assets/icons/security.png"
                              alt=""
                              srcset=""
                            />
                          </div>
                          <h5>SECURITY</h5>
                        </div>
                        <div className="Project-text-wrapper">
                          <p className="Project-text">
                            YFIC (Yearn Cash) has a total supply of 35,000
                            tokens and there will not be any more ever created.
                            The team owns more than 65% of the supply. YFIC has
                            passed a token security assessment performed by
                            Solidity. YFIC is approved by a 9-member
                            multi-signature wallet. Changes must be signed by 6
                            out of the 9 wallet signers in order to be
                            implemented. The members of the multi-signature
                            wallet were voted in by YFIC holders and are subject
                            to change from future governance votes.
                          </p>
                        </div>
                      </div>
                      <div className="Project-Highlights-content-box">
                        <div className="Project-Highlights-header">
                          <div className="Project-icon">
                            <img src="assets/icons/wallet.png" alt="" />
                          </div>
                          <h5 className="Project-extra-margin">WALLET</h5>
                        </div>
                        <div className="Project-text-wrapper">
                          <p className="Project-text">
                            YFIC (Yearn Cash) has partnered with yEARN Wallet to
                            power the Wallet’s Crypto Gaming platform. The
                            wallet will allow you to earn YFIC rewards for
                            completing challenges and playing the “in wallet”
                            casino. yEARN Wallet is far from just another Mobile
                            Cryptocurrency Wallet Application to store, stake,
                            swap, etc. The yEARN Wallet will be taking it to an
                            entirely new level by incorporating a
                            Blockchain-Enabled Internet of Things (IOT) Platform
                            specifically designed for the End-to-End Industrial
                            Supply Chain to improve the transparency, safety,
                            security, traceability, and throughput. We
                            accomplish this through a two-layer blockchain
                            design, proof of authority based smart contracts
                            integrated through ChainLink’s Oracles and consensus
                            design
                          </p>
                        </div>
                      </div>
                      <div className="Project-Highlights-content-box">
                        <div className="Project-Highlights-header">
                          <div className="Project-icon">
                            <img src="assets/icons/P2P.png" alt="" srcset="" />
                          </div>
                          <h5 className="Project-extra-margin">P2P</h5>
                        </div>
                        <div className="Project-text-wrapper">
                          <p className="Project-text">
                            YFIC (Yearn Cash) has been created by the people for
                            the people. YFIC will be used as a peer-to-peer
                            (P2P) payment system that takes the power away from
                            large financial institutions and gives the power
                            back to the people. Imagine banking with no
                            intermediary, no fees, instant transactions, and no
                            paying for unnecessary services. YFIC is a more
                            convenient and efficient payment system with faster
                            payment settlement, as well as a way for merchants
                            to receive money without the need of a third party.
                            This creates a way for businesses and individuals to
                            accept payment without high transaction fees. Our
                            goal is to be able to transfer money across the
                            globe with low fees and simple payment solutions,
                            thus giving people complete control of their money.
                            Our P2P payment system is built on the latest
                            technology and can be used on many industries.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="Project-Highlights-content-box">
                        <div className="Project-Highlights-header">
                          <div className="Project-icon">
                            <img src="assets/icons/casino.png" alt="" />
                          </div>
                          <h5 className="Project-extra-margin">CASINO</h5>
                        </div>
                        <div className="Project-text-wrapper">
                          <p className="Project-text">
                            YFIC (Yearn Cash) will be a payment option while
                            utilizing the "in wallet" casino and sports book
                            that will allow users to receive alternative methods
                            of winning just by using the YFIC token. This will
                            be one of the first and only wallets that will allow
                            the user to have so much right at their fingertips.
                          </p>
                        </div>
                      </div>
                      <div className="Project-Highlights-content-box">
                        <div className="Project-Highlights-header">
                          <div className="Project-icon">
                            <img
                              src="assets/icons/staking.png"
                              alt=""
                              srcset=""
                            />
                          </div>
                          <h5>STAKING</h5>
                        </div>
                        <div className="Project-text-wrapper">
                          <p className="Project-text">
                            YFIC (Yearn Cash) will offer a wide array of staking
                            options. Staking YFIC directly within the yEARN
                            wallet will allow you to lock your YFIC holdings to
                            receive rewards such as additional YFIC and will be
                            looking at allowing other ERC-20 tokens to be staked
                            as well.
                          </p>
                        </div>
                      </div>
                      <div className="Project-Highlights-content-box">
                        <div className="Project-Highlights-header">
                          <div className="Project-icon">
                            <img src="assets/icons/referral.png" alt="" />
                          </div>
                          <h5 className="Project-extra-margin">REWARDS</h5>
                        </div>
                        <div className="Project-text-wrapper">
                          <p className="Project-text">
                            YFIC (Yearn Cash) can be rewarded for referring new
                            users to the platform or by simply just holding a
                            certain amount of the YFIC token. YFIC will
                            incentivize users to use YFIC with great bonuses and
                            discount over other coins. By holding the YFIC token
                            and utilizing the yEARN wallet the rewards will
                            change as we continue to grow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- End Allocations Section ---------------------> */}
      {/* <!---------------------- Why Us Section ---------------------> */}
      {/* <section className="why-us">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h3>
                75% of ETH raised has been used to create our trading pairs on
                Uniswap. Liquidity tokens have been permanently locked in a burn
                address.
              </h3>
              <p>
                YFIC tokenomics work differently than what you might expect of a
                launchpad. Where you need native tokens to participate in a
                pre-sale allocation on different platforms, YFIC IDO’s are
                always fair. However, our token does have a utility. YFIC tokens
                can be staked.
              </p>
              <p>
                There will be staking pools where staking YFIC will lead to a
                reward in YFIC, but our most valued staking pool is in our Yield
                Dashboard. An exceptional location on our app where token
                holders can stake YFIC and will be rewarded in ETH for each IDO
                launched through YFIC.
              </p>
              <p>
                Because the source of value is tokenized within our YFIC token,
                a micro-economy is built that aligns with participating
                individuals’ incentives with the goal of growth, passive income
                and a YFIC ecosystem. We strive to cooperate with the community
                by creating a decentralized revenue-share system that aims to
                grow through social-marketing.
              </p>
              <p>
                Help us, help you; so that we may all grow together & create a
                safer trading environment
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!---------------------- End Why Us Section ---------------------> */}
      {/* <!---------------------- Partners Section ---------------------> */}
      <section className="partners pt-0">
        <div className="container custom-contain">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 style={{ marginTop: "20px" }}>YFIC Partners</h2>
              <div className="mt-5 comapany-logos">
                {/* <p>
                  Projects that launch through YFIC will have the opportunity to
                  pitch their project to our KOL network. Through our private
                  Telegram channel, we aim to streamline Marketing, <br />
                  Advisory and Strategic Partnership connections between project
                  leaders and well known KOLs within the DeFi community. Use of
                  our KOL group is without obligation, but highly recommended.
                </p> */}
                {/* <a href="https://dancannabis.com/">
                <img src="assets/images/wallet-new-logo.JPG" alt="" />
                </a> */}
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
      {/* <!---------------------- Yearncash App Section ---------------------> */}
      <section className="yearncash-app">
        <div className="container custom-contain">
          <div className="row text-center">
            <div className="col-md-12">
              <Model />
              <p>Smartphone based Wallet App</p>
              <div className="app-btns">
                <a href="#">
                  <img src="assets/icons/app-store.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/icons/google-play.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- End Yearncash App Section ---------------------> */}
      {/* <!---------------------- Call To Action ---------------------> */}
      <section className="cta">
        <div className="container custom-contain">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>Join Us On Telegram</h2>
              {/* <p>
                Fusce placerat pretium mauris, vel sollicitudin elit lacinia
                vitae. Quisque sit amet nisi erat.
              </p> */}
              <div className="btn-wrapper">
                <a target="_blank" href="https://t.me/yearnwallet">
                  <button className="btn custom-btn">
                    Join Us On Telegram
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- End Call To Action ---------------------> */}
    </div>
  );
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await axios.post(
    "https://widget.nomics.com/api/assets/YFIC3/USD/"
  );
  let data = stringify(res);
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
      data,
      coinsData,
    },
  };
}