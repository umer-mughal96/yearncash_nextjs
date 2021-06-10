import React from "react";
import Marqueee from "../Marquee/Marquee";
import Link from "next/link";
import HeroMenu from '../HeroMenu/HeroMenu';

const SubHeader = ({marqueeData}) => {
  return (
    <section className="hero transparent-hero d-flex flex-column justify-content-end align-items-center">
      <div className="currency-bar-wrap">
        <Marqueee marqueeData={marqueeData}/>
      </div>
      <div className="container custom-contain">
      <HeroMenu />
      </div>
    </section>
  );
};

export default SubHeader;
