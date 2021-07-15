import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import axios from "axios";
var stringify = require("json-stringify-safe");
import { CopyToClipboard } from "react-copy-to-clipboard";

const Invest = (props) => {
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));
  const [value, setValue] = useState(
    "0x9CF4679c67BEE8dA2D6F58c64592fFf6beE79330"
  );
  const [copied, setCopied] = useState("");
  return (
    <div>
      <Layout
        title="Find Yearn Cash on HotBit, Uniswap, 1Inch, Sushiswap, Pancake Swap 
      and more coming!"
        favicon="icons/invest.png"
      />
      <SubHeader marqueeData={marqueeData} />
      {/* <!---------------------- End Hero Section ---------------------> */}
      <div className="container-fluid">
        <div className="row invest-container">
          <div className="col-md-12 p-0">
            <div className="yearn-cash-copy">
              <h2>Yearn Cash</h2>
              <h5>Yearn Cash Contract</h5>
              <form action="">
                <div className="form-group Clipboard-box">
                  <input
                    onChange={({ target: { value } }) => setCopied(false)}
                    type="text"
                    value="0x9CF4679c67BEE8dA2D6F58c64592fFf6beE79330"
                    id="myInput"
                  />
                  <div>
                    <CopyToClipboard
                      text={value}
                      onCopy={() => setCopied(true)}
                    >
                      <button onClick={(e) => e.preventDefault()}>Copy</button>
                    </CopyToClipboard>
                    {copied ? (
                      <span className="Copied-text">Copied.</span>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12 p-0">
            <div className="yearn-cash-heading">
              <h5>Now Available on the following Exchanges!!</h5>
            </div>
            <div className="row exchange-images">
              <div className="col-md-4 col-sm-4 col-6">
                <div className="exchange-image">
                  <img src="assets/icons/Rectangle189.png" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-6">
                <div className="exchange-image">
                  <img src="assets/icons/Rectangle192.png" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-6">
                <div className="exchange-image">
                  <img src="assets/icons/Rectangle.png" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-6">
                <div className="exchange-image">
                  <img src="assets/icons/Rectangle191.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 p-0">
            <div className="yearn-cash-copi">
              <h5>Adding YFIC using MetaMask wallet</h5>
              <img src="assets/icons/Ellipse.png" alt="" />
              <ul className="list-unstyled">
                <li>
                  1. Open MetaMask wallet. On the main account screen scroll
                  down and you’ll find “Add Token” button.
                </li>
                <li>
                  <img src="assets/icons/Image.png" alt="" />
                </li>
                <li>
                  2. Now on your MetaMask wallet go to add tokens page and
                  choose custom tokens.
                </li>
                <li>
                  3. Enter the token contract address:
                  0x9CF4679c67BEE8dA2D6F58c64592fFf6beE79330
                </li>
                <li>
                  4. Token Symbol will populate “Yfic” and the Decimals of
                  Precision will populate “18” after the Token Contract Address
                  is filled in
                </li>
                <li>
                  5. Click “Next” or “Add Token” and you now see Yfic in your
                  wallet
                </li>
              </ul>
              {/* How to Incest code */}
          <div className="Incest-code-wrapper">
            <div className="Incest-code">
              <div
                className="livecoinwatch-widget-6"
                lcw-coin="YFIC"
                lcw-base="USD"
                lcw-period="d"
                lcw-color-tx="#ffffff"
                lcw-color-bg="#083c0b"
                lcw-border-w="2"
              ></div>
            </div>
          </div>
          {/* How to Incest code */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Invest Section --> */}
    </div>
  );
};

export default Invest;

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
