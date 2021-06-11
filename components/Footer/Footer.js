import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer-wrapper">
<footer>
        <div className="container custom-contain">
            <div className="row">
                <div className="col-md-3">
                    <div className="footer-logo">
                        <img src="assets/icons/Main-logo.svg" alt="" />
                    </div>
                    {/* <div className="site-name">
                        <h6>Yearn Cash</h6>
                    </div> */}
                </div>
                <div className="col-md-2">
                    <h6>Legal</h6>
                    <ul className="list-unstyled">
                        <li><Link href="/">Site terms</Link></li>
                        <li><Link href="/">Terms and Conditions</Link></li>
                        <li><Link href="/">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6>Documents</h6>
                    <ul className="list-unstyled">
                        <li><Link href="/whitepaper">Whitepaper</Link></li>
                        <li><Link href="/codeofethics">Code of Ethics</Link></li>
                        <li><Link href="/">PoV</Link></li>
                        <li><Link href="/">Cookie Policy</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h6>Contact</h6>
                    <ul className="list-unstyled">
                        <li><a target="_blank" href="https://mail.google.com/mail">support@yearncash.io</a></li>
                        <li><a target="_blank" href="https://mail.google.com/mail">support@yearnwallet.io</a></li>
                        {/* <li><Link href="/">+0091-24654-1261</Link></li> */}
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6>Social Media</h6>
                    <ul className="list-unstyled">
                        <li><a target="_blank" href="https://www.facebook.com/yearncash/"><i class="fab fa-facebook-square"></i> /YearnCash</a></li>
                        <li><a target="_blank" href="https://twitter.com/devscash"><i class="fab fa-twitter"></i> @DevsCash</a></li>
                        <li><a target="_blank" href="https://www.instagram.com/yearn.cash"><i class="fab fa-instagram"></i> @YearnCash</a></li>
                        <li><a target="_blank" href="https://t.me/yearnwallet"><i class="fab fa-telegram-plane"></i> yearnwallet</a></li>
                        <li><a target="_blank" href="https://mail.google.com/mail"><i class="fas fa-envelope"></i> Yearn Cash</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center">
            <div className="copyright-wrap">
                <span>All rights reserved to yearncash.io 2021</span>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default Footer;
