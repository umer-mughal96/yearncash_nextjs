import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import axios from 'axios'
var stringify = require("json-stringify-safe");

const promotion = (props) => {
    const [marqueeData, setMarqueeData] = useState(JSON.parse(props.coinsData));

    return (
        <div className="promotion-page">
            <Layout title="Promotions" favicon="icons/horse.png"/>
            <SubHeader marqueeData={marqueeData} />
            {/* <!---------------------- Promotions Section ---------------------> */}
            <div className="promotions">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 order-md-1 order-4  p-0">
                            <div className="panel  border-style-one">
                                <p>Register to win this digital NFT<br /> racehorse "LAVAR" (0.2 ETH Value) by following all
                                    our
                                    social media accounts</p>
                            </div>
                        </div>
                        <div className="col-md-2 order-md-2 order-1">
                            <div className="eth-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="108" viewBox="0 0 105 108">
                                    <g id="Group_364" data-name="Group 364" transform="translate(-651 -629)">
                                        <g id="Group_363" data-name="Group 363">
                                            <g id="Group_362" data-name="Group 362">
                                                <text id="_.2_ETH" data-name=".2 ETH" transform="translate(670 690)"
                                                    fill="#fff" font-size="22" font-family="Poppins-Regular, Poppins">
                                                    <tspan x="0" y="0">.2 ETH</tspan>
                                                </text>
                                                <g id="Ellipse_117" data-name="Ellipse 117" transform="translate(651 629)"
                                                    fill="none" stroke="#fff" stroke-width="1">
                                                    <circle cx="50" cy="50" r="50" stroke="none" />
                                                    <circle cx="50" cy="50" r="49.5" fill="none" />
                                                </g>
                                                <g id="Ellipse_119" data-name="Ellipse 119" transform="translate(656 629)"
                                                    fill="none" stroke="#fff" stroke-width="3">
                                                    <circle cx="50" cy="50" r="50" stroke="none" />
                                                    <circle cx="50" cy="50" r="48.5" fill="none" />
                                                </g>
                                                <g id="Ellipse_120" data-name="Ellipse 120" transform="translate(651 637)"
                                                    fill="none" stroke="#fff" stroke-width="1.5">
                                                    <circle cx="50" cy="50" r="50" stroke="none" />
                                                    <circle cx="50" cy="50" r="49.25" fill="none" />
                                                </g>
                                                <g id="Ellipse_118" data-name="Ellipse 118" transform="translate(656 634)"
                                                    fill="none" stroke="#fff" stroke-width="1">
                                                    <circle cx="50" cy="50" r="50" stroke="none" />
                                                    <circle cx="50" cy="50" r="49.5" fill="none" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="col-md-3 order-md-3 order-2">
                            <div className="nft-img">
                                <img src="assets/images/horse.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-2 order-md-4 order-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="144.052" height="99.239"
                                viewBox="0 0 144.052 99.239">
                                <g id="Group_352" data-name="Group 352" transform="translate(-12356.977 -914.465)">
                                    <g id="Group_351" data-name="Group 351" transform="translate(12356.977 914.465)">
                                        <path id="Path_248" data-name="Path 248"
                                            d="M32.139,13H0c0,7.741,7.67,7.852,7.67,7.852H29.583L0,69.974c0,7.376,7.487,7.4,7.487,7.4H39.17c0-7.324-7.031-7.4-7.031-7.4H7.67l31.5-49.122C39.17,13,32.139,13,32.139,13"
                                            transform="translate(0 21.869)" fill="#fff" fill-rule="evenodd" />
                                        <path id="Path_249" data-name="Path 249"
                                            d="M58.934,69.974s.075,7.4-7.549,7.4H26.8c-.752-.024-7.141-.434-7.141-7.394ZM59.008,41.4v7.4H19.656V41.4ZM51.385,13c7.192,0,7.624,7.852,7.624,7.852H19.656c0-7.05,7.213-7.852,7.213-7.852Z"
                                            transform="translate(33.066 21.869)" fill="#fff" fill-rule="evenodd" />
                                        <path id="Path_250" data-name="Path 250"
                                            d="M71.048,42.715V86.773s-.069,5.015-4.473,5.015l-15.964.05s-4.489,0-4.489-5.106L46.15,45.94s0-3.225,4.379-3.225Zm7.4,49.122V0h-7.4V34.863H46.4c-7.321,0-7.4,7.852-7.4,7.852V91.837c0,7.38,7.122,7.4,7.122,7.4H71.139c7.652,0,7.3-7.4,7.3-7.4Z"
                                            transform="translate(65.606 0)" fill="#fff" />
                                    </g>
                                </g>
                            </svg>
                            <div className="more-info-wrapper">
                                <a href="https://opensea.io/assets/matic/0xa5f1ea7df861952863df2e8d1312f7305dabf215/16465">More info</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-lg-3 col-xl-3">

                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <div className="yearn-logo">
                                <img src="assets/icons/footer-logo.svg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-7 col-xl-7 p-0">
                            <div className="panel border-style-two social">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <a target="_blank" href="https://www.facebook.com/yearncash/" className="d-flex align-items-center pb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39"
                                                    viewBox="0 0 39 39">
                                                    <g id="Group_356" data-name="Group 356"
                                                        transform="translate(-12314.895 -582.5)">
                                                        <g id="Group_354" data-name="Group 354">
                                                            <path id="Icon_awesome-facebook-f"
                                                                data-name="Icon awesome-facebook-f"
                                                                d="M15.64,15.769l.779-5.073H11.551V7.4a2.537,2.537,0,0,1,2.86-2.741h2.213V.343A26.989,26.989,0,0,0,12.7,0c-4.009,0-6.63,2.43-6.63,6.829V10.7H1.609v5.073H6.066V28.034h5.485V15.769Z"
                                                                transform="translate(12325.775 591.966)" fill="#fff" />
                                                            <path id="Path_251" data-name="Path 251"
                                                                d="M12,3H30a9,9,0,0,1,9,9V30a9,9,0,0,1-9,9H12a9,9,0,0,1-9-9V12a9,9,0,0,1,9-9Z"
                                                                transform="translate(12313.395 581)" fill="none"
                                                                stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="3" />
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span>yearncash</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <a target="_blank" href="https://twitter.com/devscash"  className="d-flex align-items-center pb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38.509" height="32.092"
                                                    viewBox="0 0 38.509 32.092">
                                                    <path id="Icon_feather-twitter" data-name="Icon feather-twitter"
                                                        d="M38.009,4.5A18.089,18.089,0,0,1,32.8,7.041a7.435,7.435,0,0,0-13.044,4.979v1.66A17.691,17.691,0,0,1,4.819,6.161s-6.638,14.936,8.3,21.574A19.317,19.317,0,0,1,1.5,31.054c14.936,8.3,33.19,0,33.19-19.085a7.468,7.468,0,0,0-.133-1.377A12.812,12.812,0,0,0,38.009,4.5Z"
                                                        transform="translate(-0.5 -3.365)" fill="none" stroke="#fff"
                                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                </svg>
                                                <span>@Devcash</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <a target="_blank" href="https://twitter.com/yearnwallet" className="d-flex align-items-center pb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38.509" height="32.092"
                                                    viewBox="0 0 38.509 32.092">
                                                    <path id="Icon_feather-twitter" data-name="Icon feather-twitter"
                                                        d="M38.009,4.5A18.089,18.089,0,0,1,32.8,7.041a7.435,7.435,0,0,0-13.044,4.979v1.66A17.691,17.691,0,0,1,4.819,6.161s-6.638,14.936,8.3,21.574A19.317,19.317,0,0,1,1.5,31.054c14.936,8.3,33.19,0,33.19-19.085a7.468,7.468,0,0,0-.133-1.377A12.812,12.812,0,0,0,38.009,4.5Z"
                                                        transform="translate(-0.5 -3.365)" fill="none" stroke="#fff"
                                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                </svg>
                                                <span>@yearnwallet</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <a target="_blank" href="https://www.instagram.com/yearn.cash" className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39"
                                                    viewBox="0 0 39 39">
                                                    <g id="Group_355" data-name="Group 355"
                                                        transform="translate(-12472.895 -582.5)">
                                                        <g id="Icon_feather-instagram" data-name="Icon feather-instagram"
                                                            transform="translate(12471.395 581)">
                                                            <path id="Path_251" data-name="Path 251"
                                                                d="M12,3H30a9,9,0,0,1,9,9V30a9,9,0,0,1-9,9H12a9,9,0,0,1-9-9V12a9,9,0,0,1,9-9Z"
                                                                fill="none" stroke="#fff" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="3" />
                                                            <path id="Path_252" data-name="Path 252"
                                                                d="M26.387,18.079a7.2,7.2,0,1,1-6.066-6.066,7.2,7.2,0,0,1,6.066,6.066Z"
                                                                transform="translate(1.813 1.787)" fill="none" stroke="#fff"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="3" />
                                                            <path id="Path_253" data-name="Path 253" d="M26.25,9.75h0"
                                                                transform="translate(4.65 1.35)" fill="none" stroke="#fff"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="3" />
                                                        </g>
                                                    </g>
                                                </svg>
                                                <span>@yearn.cash</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <a target="_blank" href="https://t.me/Yficgenesis" className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43.897" height="39.932"
                                                    viewBox="0 0 43.897 39.932">
                                                    <g id="Group_357" data-name="Group 357"
                                                        transform="translate(-105.11 -227.798)">
                                                        <path id="Path_254" data-name="Path 254"
                                                            d="M146.639,227.8c1.555,0,2.647,1.444,2.3,3.28-.539,2.883-1.1,5.761-1.651,8.641q-1.891,9.883-3.781,19.766c-.358,1.872-.676,3.753-1.094,5.612a3.416,3.416,0,0,1-5.406,1.939c-2.681-2.052-5.334-4.14-7.979-6.238a.614.614,0,0,0-.971.055q-2.322,2.191-4.677,4.347a1.989,1.989,0,0,1-3.394-.592,28.02,28.02,0,0,1-1.495-4.481c-.744-2.38-1.446-4.773-2.149-7.165a.791.791,0,0,0-.606-.553q-4.168-1.415-8.329-2.848a3.247,3.247,0,0,1-2.16-1.967,2.324,2.324,0,0,1,.86-2.685,10.592,10.592,0,0,1,2.506-1.244q12.133-5.215,24.277-10.4,5.741-2.458,11.487-4.906A5.24,5.24,0,0,1,146.639,227.8Zm.245,2.819c.027-.464-.119-.715-.634-.656a3.547,3.547,0,0,0-.99.318q-5.184,2.217-10.366,4.438-13.274,5.683-26.547,11.371c-.391.168-1.022.273-1,.728.023.511.63.7,1.1.862,2.669.921,5.342,1.828,8.009,2.754a.915.915,0,0,0,.912-.106q5.6-3.755,11.216-7.482,5.815-3.877,11.628-7.757c.645-.429,1.2-.4,1.584.048.4.46.344.977-.168,1.579q-3.4,4.008-6.8,8.013-4.419,5.2-8.848,10.39c-.28.328-.274.523.088.783.908.653,1.8,1.333,2.68,2.019q4.692,3.647,9.377,7.3a1.317,1.317,0,0,0,2.276-.817q.926-4.72,1.827-9.445,1.968-10.228,3.932-20.458C146.4,233.21,146.641,231.913,146.884,230.617Zm-11.71,10.434a1.355,1.355,0,0,0-.172.049q-8.176,5.449-16.355,10.893a.486.486,0,0,0-.207.648q1.423,4.685,2.835,9.373c.036.12.026.294.247.338.48-2.155.964-4.3,1.429-6.447a2.474,2.474,0,0,1,.545-1.12q2.894-3.392,5.775-6.794C131.218,245.7,133.167,243.41,135.174,241.051Zm-11.391,20.9c1-.927,1.869-1.74,2.75-2.54.213-.194.248-.333,0-.516-.489-.356-.967-.726-1.451-1.089-.2-.152-.345-.186-.413.139C124.391,259.228,124.1,260.509,123.783,261.949Z"
                                                            transform="translate(0 0)" fill="#fff" />
                                                    </g>
                                                </svg>
                                                <span>@Yficgenesis</span>  
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="d-flex align-items-center">
                                            <a target="_blank" href="https://twitter.com/yearnwallet" className="d-flex align-items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43.897" height="39.932"
                                                    viewBox="0 0 43.897 39.932">
                                                    <g id="Group_357" data-name="Group 357"
                                                        transform="translate(-105.11 -227.798)">
                                                        <path id="Path_254" data-name="Path 254"
                                                            d="M146.639,227.8c1.555,0,2.647,1.444,2.3,3.28-.539,2.883-1.1,5.761-1.651,8.641q-1.891,9.883-3.781,19.766c-.358,1.872-.676,3.753-1.094,5.612a3.416,3.416,0,0,1-5.406,1.939c-2.681-2.052-5.334-4.14-7.979-6.238a.614.614,0,0,0-.971.055q-2.322,2.191-4.677,4.347a1.989,1.989,0,0,1-3.394-.592,28.02,28.02,0,0,1-1.495-4.481c-.744-2.38-1.446-4.773-2.149-7.165a.791.791,0,0,0-.606-.553q-4.168-1.415-8.329-2.848a3.247,3.247,0,0,1-2.16-1.967,2.324,2.324,0,0,1,.86-2.685,10.592,10.592,0,0,1,2.506-1.244q12.133-5.215,24.277-10.4,5.741-2.458,11.487-4.906A5.24,5.24,0,0,1,146.639,227.8Zm.245,2.819c.027-.464-.119-.715-.634-.656a3.547,3.547,0,0,0-.99.318q-5.184,2.217-10.366,4.438-13.274,5.683-26.547,11.371c-.391.168-1.022.273-1,.728.023.511.63.7,1.1.862,2.669.921,5.342,1.828,8.009,2.754a.915.915,0,0,0,.912-.106q5.6-3.755,11.216-7.482,5.815-3.877,11.628-7.757c.645-.429,1.2-.4,1.584.048.4.46.344.977-.168,1.579q-3.4,4.008-6.8,8.013-4.419,5.2-8.848,10.39c-.28.328-.274.523.088.783.908.653,1.8,1.333,2.68,2.019q4.692,3.647,9.377,7.3a1.317,1.317,0,0,0,2.276-.817q.926-4.72,1.827-9.445,1.968-10.228,3.932-20.458C146.4,233.21,146.641,231.913,146.884,230.617Zm-11.71,10.434a1.355,1.355,0,0,0-.172.049q-8.176,5.449-16.355,10.893a.486.486,0,0,0-.207.648q1.423,4.685,2.835,9.373c.036.12.026.294.247.338.48-2.155.964-4.3,1.429-6.447a2.474,2.474,0,0,1,.545-1.12q2.894-3.392,5.775-6.794C131.218,245.7,133.167,243.41,135.174,241.051Zm-11.391,20.9c1-.927,1.869-1.74,2.75-2.54.213-.194.248-.333,0-.516-.489-.356-.967-.726-1.451-1.089-.2-.152-.345-.186-.413.139C124.391,259.228,124.1,260.509,123.783,261.949Z"
                                                            transform="translate(0 0)" fill="#fff" />
                                                    </g>
                                                </svg>
                                                <span>@yearnwallet</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 p-0">
                            <div className="panel border-style-one">
                                <p>The winner will be announced on 07/15/2021. Make sure that your are registered to be
                                    included
                                    in our Beta of the wallet at the end of July</p>
                            </div>
                        </div>
                        <div className="col-md-8"></div>
                    </div>

                </div>
            </div>
            {/* <!---------------------- End Promotions Section ---------------------> */}
        </div>
    );
};

export default promotion;


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
    let coinsData = stringify(result)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            coinsData
        },
    };
}