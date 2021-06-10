import React from 'react';
import OwlCarousel from '@ntegral/react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} dots={false} navElement={true} items={6} nav>
      <div class="item">
      <a href="https://dancannabis.com/">
                <img src="assets/images/wallet-new-logo.JPG" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/metrc-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/chainlink-labs-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="https://dancannabis.com/">
                <img src="assets/images/wallet-new-logo.JPG" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/metrc-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/chainlink-labs-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/metrc-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/chainlink-labs-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/metrc-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/chainlink-labs-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/metrc-logo2.png" alt="" />
                </a>
      </div>
      <div class="item">
      <a href="#">
                <img src="assets/images/chainlink-labs-logo2.png" alt="" />
                </a>
      </div>
    </OwlCarousel>
  );
};

export default Carousel;
