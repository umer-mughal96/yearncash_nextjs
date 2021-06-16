import axios from "axios";
import React, { useEffect, useState } from "react";
import ProgressBar from "../components/CircularProgress/ProgressBar";
import HomeSubHeader from "../components/HomeSubHeader/HomeSubHeader";
import Layout from "../components/Layout/Layout";
// import TeamMembers from "../components/Team/TeamMembers";
import dynamic from "next/dynamic";

var stringify = require("json-stringify-safe");

// const MySlider = dynamic(
//   () => import("../components/Carousel/Caorusel"),
//   { ssr: false }
// );

export default function Home(props) {
  const [yfic, setYfic] = useState(JSON.parse(props.data));
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

  return (
    <div>
      <Layout title="Home" />
      <HomeSubHeader marqueeData={marqueeData} />
      {/* <!---------------------- YearCash Chart Section ---------------------> */}
      <section className="yearcash-chart">
        <div className="container custom-contain">
          <div className="row yearcash-stat stat-header">
            <div className="col-md-6 col">
              <div className="avatar-text-wrapper">
                <div className="stat-avatar">
                  {/* <img src={yfic && yfic?.data?.meta.logo_url} alt="" /> */}
                  <img src="assets/images/YFIC.svg" alt="" />
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
      <section className="about-us">
        <div className="container custom-contain">
          <div className="row">
            <div className="col-md-6">
              <div className="about-illustration-wrap">
                <img src="assets/images/YFIC.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
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
              <p>
                Yearn Cash seeks to be the cryptocurrency by the people and for
                the people. Our intention is to be adopted for use as a peer-to
                peer (P2P) payment system, which gives the power back to the
                people as well as solve real world problems that are faced
                daily. Yearn Cash is an ERC-20 Token, which are blockchain-based
                assets that have value and can be received and sent. ERC-20
                tokens reside on the Ethereum blockchain. Another key benefit of
                Yearn Cash is that it uses the latest technological advances
                such as Defi and is completely open to integration of future
                industry developments, such as sharding and quantic tech amongst
                other future developments.
              </p>
            </div>
          </div>
          <div className="row second-row">
            <div className="col-md-6 second-para-wrapper order-md-1 order-2 ">
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
              <p>
                Yearn Cash is a protocol on the Ethereum blockchain. The purpose
                of which is to offer the user a convenient and simple mobile
                tool and decentralized product beyond the simple management of
                decentralized applications. The ultimate goal of the Yearn Cash
                protocol is to provide an integrated DeFi platform that users
                and the community do not need to look for to use. In addition,
                the Yearn Cash product also provides risk mitigation measures.
                If we pay attention to all DeFi products, we see maximum market
                and price manipulation.
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="about-illustration-wrap ">
                <img src="assets/images/YFICSTPES.svg" alt="" />
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
                <h2>Allocations</h2>
                <div>
                  <p>
                    For community-based efforts, Multisig wallets for DAOs and
                    DeFi projects are often implemented as 6 of 9 wallets, where
                    6 of 9 community wallet signers must agree to sign a
                    transaction before a Smart Contract can be implemented.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- End Allocations Section ---------------------> */}
      {/* <!---------------------- Why Us Section ---------------------> */}
      <section className="why-us">
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
      </section>
      {/* <!---------------------- End Why Us Section ---------------------> */}
      {/* <!---------------------- Partners Section ---------------------> */}
      <section className="partners pt-0">
        <div className="container custom-contain">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>YFIC Partners</h2>
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
              <button className="btn custom-btn rounded-btn">Download</button>
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
