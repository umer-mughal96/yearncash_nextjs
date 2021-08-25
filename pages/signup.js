import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import axios from "axios";
var stringify = require("json-stringify-safe");

const signup = (props) => {
  const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

  return (
    <div className="signup-page">
      <Layout title="Signup" favicon="icons/horse.png" />
      <SubHeader marqueeData={marqueeData} />
      {/* <!---------------------- Promotions Section ---------------------> */}
      <section className="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Cryptonize Your Business</h1>
              <p>
                Here’s our landing page for once you click on the Cryptonize
                your Business tab. The Title above the text in the image should
                be reworded to “Is Your Business Crypto-Ready?” And the text
                underneath this new title can read:
              </p>
              <p>
                The Yearn Ecosystem allows businesses to simply integrate
                cryptocurrency into their existing payment software. No matter
                your level of knowledge or experience in digital currencies, we
                are here to walk you through every step of the process! Pay or
                be paid in crypto! It’s time to prepare for the new age of
                finance. It’s time to cryptonize your business!! So what are you
                waiting for, click the button below and answer a few basic
                questions about your business. A member of our team will reach
                out to you within 24hrs.{" "}
              </p>
              <p>
                We’re looking forward to helping you and your business become
                fully integrated with a tailored cryptocurrency solution!
                Welcome to the new age of finance. Welcome to the yEARN
                Ecosystem!
              </p>
              <form>
                
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Name of person submitting"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Name of Company"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Address of company"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Areas of operation"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="List of socials"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Linked In Acct of person submitting"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="2020 Revenue"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="2019 Revenue"
                  />
                </div>
                <div className="form-group">
                  <select
                    placeholder="Number of Employees"
                    className="form-control"
                  >
                    <option value="" hidden>
                      Number of Employees
                    </option>
                    <option value="">0-25</option>
                    <option value="">25-50</option>
                    <option value="">50-100</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Current software systems used"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Current invoicing systems used"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Avg number monthly transactions"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Avg transaction amount"
                  />
                </div>
                <div className="form-group">
                </div>
                <input type="submit" value="Submit" className="mt-4 form-control" />
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!---------------------- End Promotions Section ---------------------> */}
    </div>
  );
};

export default signup;

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
