import React, { useState } from "react";
import Link from "next/link";
import SocialMedia from '../SocialMedia/SocialMedia';
import DarkModeToggle from "../DarkMode/DarkmodeToggle";

const Header = () => {
  const [toggler, setShowToggler] = useState(false);

  return (
    <div className="header-wrapper">
      {/* <!-- ===================== Header ======================== --> */}
      <header>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand site-logo" href="/">
            <img src="assets/icons/White-logo.svg" alt="" />
          </a>
          
          <button
            className={toggler ?  'navbar-toggler' : 'navbar-toggler collapsed'}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={toggler ?  'false' : 'true'}
            aria-label="Toggle navigation"
          >
            <div onClick={() => setShowToggler(!toggler)} className={toggler ?  'change' : ''} >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </button>

          <div className={!toggler ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'} id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/invest">
                  Invest in YFIC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/wallet">
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/whitepaper">
                  Whitepaper
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/roadmap">
                  Road map
                </a>
              </li>
            </ul>
           
              <SocialMedia />
              <DarkModeToggle />
          </div>
        </nav>
      </header>
      {/* <!-- ===================== End Header ======================== --> */}
    </div>
  );
};

export default Header;
