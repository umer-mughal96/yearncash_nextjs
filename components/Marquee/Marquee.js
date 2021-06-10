import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { logos } from "../../LogoData";

const Marqueee = ({ marqueeData }) => {
  const [coinsRate, setCoinsRate] = useState("");

  let finalData = [];

  useEffect(() => {
    if (marqueeData) {
      for (var i = 0; i < 100; i++) {
        let isFind = marqueeData.data.data.find((c) => c.id == logos[i].id);
        if (isFind) {
          isFind.logo = logos[i].logo;
          finalData.push(isFind);
        }
      }
      setCoinsRate(finalData);
    }
  }, [marqueeData]);

  return (
    <Marquee pauseOnHover={true}>
      <ul className="currency-bar list-unstyled">
        <li>
          <div className="currency-info">
            {coinsRate &&
              coinsRate.map((coin, index) => {
                return (
                  <span key={index}>
                    <span className="icon">
                      <img src={coin.logo} alt="" />
                    </span>
                    <span className="currency-name">
                      {coin.name} ({coin.symbol})
                    </span>
                    <span className="currency-rate">
                      ${coin.quote.USD.price.toFixed(2)}
                    </span>

                    {coin.quote.USD.percent_change_1h
                      ?.toString(10)
                      .split("")[0] == "-" ? (
                      <>
                        {" "}
                        <span className="percentage-change change-down">
                          <i className="far fa-arrow-down"></i>
                          {coin.quote.USD.percent_change_1h.toFixed(3)}%{" "}
                        </span>
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="percentage-change change-down">
                          <i className="far fa-arrow-up"></i>
                          {coin.quote.USD.percent_change_1h.toFixed(3)}%{" "}
                        </span>
                      </>
                    )}
                  </span>
                );
              })}
          </div>
        </li>
      </ul>
    </Marquee>
  );
};

export default Marqueee;

export async function getStaticProps() {
  let config = {
    headers: {
      "X-CMC_PRO_API_KEY": "fcb17a13-9025-4066-b3a2-f57f08ccdccf",
    },
  };
  let result = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    config
  );
  console.log(
    "🚀 ~ file: Marquee.js ~ line 75 ~ getStaticProps ~ result",
    result
  );
  let coinsData = stringify(result);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      coinsData,
    },
    revalidate: 10,
  };
}
