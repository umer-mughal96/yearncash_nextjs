import React from "react";
import Marqueee from "../Marquee/Marquee";
import HeroMenu from "../HeroMenu/HeroMenu";
import Circle from "../Svg/svg";

const HomeSubHeader = ({ marqueeData }) => {
  return (
    <div className="HomeSubHeader-wrapper">
      {/* <!---------------------- Hero Section ---------------------> */}
      <section className="hero d-flex flex-column justify-content-end align-items-center">
        <div className="currency-bar-wrap">
          <Marqueee marqueeData={marqueeData} />
        </div>
        <div className="container custom-contain">
          <HeroMenu />
          {/* <!-- Slide 1 --> */}
          <div className="carousel-item active">
            <div className="hero-content">
              <h1>What is YFIC?</h1>
              <p>
                Yearn Cash is an ERC-20 token with a maximum supply of 35,000.
                ERC-20 tokens are blockchain-based assets that can be received
                and sent instantly. A major benefit of Yearn Cash being this
                type of token is that it is used for all smart contracts on the
                Ethereum blockchain, and it has emerged as the technical
                standard for token implementation. Another key benefit of Yearn
                Cash is that it uses the latest technological advances such as
                Defi(decentralized finance) and is completely open to the
                integration of future industry developments.
              </p>
              {/* <button className="btn custom-link">
                Learn More
                <br /> <i className="far fa-chevron-down"></i>
              </button> */}
            </div>
          </div>
        </div>

        <Circle />
      </section>
      {/* <!---------------------- End Hero Section ---------------------> */}
    </div>
  );
};

export default HomeSubHeader;
