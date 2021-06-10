import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const HeroMenu = () => {
  const [active, setActive] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      setActive("Home");
    }
    if (router.pathname == "/invest") {
      setActive("Invest in YFIC");
    }
    if (router.pathname == "/wallet") {
      setActive("Wallet");
    }
    if (router.pathname == "/whitepaper") {
      setActive("Whitepaper");
    }
    if (router.pathname == "/team") {
      setActive("Team");
    }
    if (router.pathname == "/roadmap") {
      setActive("Road map");
    }
  }, [router.pathname]);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="custom-nav d-none d-md-none d-lg-block d-xl-block">
          <ul>
            <li className={active == "Home" ? `nav-item active` : "nav-item"}>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li
              className={
                active == "Invest in YFIC" ? `nav-item active` : "nav-item"
              }
            >
              <Link className="nav-link" href="/invest">
                Invest in YFIC
              </Link>
            </li>
            <li className={active == "Wallet" ? `nav-item active` : "nav-item"}>
              <Link className="nav-link" href="/wallet">
                Wallet
              </Link>
            </li>
            <li
              className={
                active == "Whitepaper" ? `nav-item active` : "nav-item"
              }
            >
              <Link href="/whitepaper">Whitepaper</Link>
            </li>
            <li className={active == "Team" ? `nav-item active` : "nav-item"}>
              <Link href="/team">Team</Link>
            </li>
            <li
              className={active == "Road map" ? `nav-item active` : "nav-item"}
            >
              <Link className="nav-link" href="/roadmap">
                Road map
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroMenu;
